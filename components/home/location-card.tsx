'use client'

import type { Globe } from 'cobe'

import createGlobe from 'cobe'
import { MapPinIcon } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Badge } from '../ui/badge'

const MARKERS = [{ id: 'kochi', location: [9.9312, 76.2673] as [number, number], size: 0.03 }]

function getThemeOptions(isDark: boolean) {
  return {
    dark: isDark ? 1 : 0,
    diffuse: isDark ? 2 : 1.5,
    mapBrightness: isDark ? 2 : 1.5,
    baseColor: isDark ? ([0.8, 0.8, 0.8] as [number, number, number]) : ([1, 1, 1] as [number, number, number]),
    markerColor: isDark ? ([1, 1, 1] as [number, number, number]) : ([0, 0, 0] as [number, number, number]),
    glowColor: isDark
      ? ([0.5, 0.5, 0.5] as [number, number, number])
      : ([0.94, 0.93, 0.91] as [number, number, number]),
  }
}

export function LocationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<Globe | null>(null)
  const [ready, setReady] = useState(false)
  const pointerInteractingRef = useRef<{ x: number; y: number } | null>(null)
  const dragOffsetRef = useRef({ phi: 0 })
  const phiOffsetRef = useRef(3.35)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteractingRef.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
  }, [])

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      if (pointerInteractingRef.current !== null) {
        const deltaX = e.clientX - pointerInteractingRef.current.x
        dragOffsetRef.current = { phi: deltaX / 300 }
      }
    }

    function handlePointerUp() {
      if (pointerInteractingRef.current !== null) {
        phiOffsetRef.current += dragOffsetRef.current.phi
        dragOffsetRef.current = { phi: 0 }
      }
      pointerInteractingRef.current = null
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
    }

    globalThis.addEventListener('pointermove', handlePointerMove, { passive: true })
    globalThis.addEventListener('pointerup', handlePointerUp, { passive: true })

    return () => {
      globalThis.removeEventListener('pointermove', handlePointerMove)
      globalThis.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const width = canvas.offsetWidth
    
    // Performance: Cap pixel ratio to avoid GPU overload on ultra-high-res screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width,
      height: width,
      phi: phiOffsetRef.current,
      theta: -0.10,
      mapSamples: 16_000, // 16,000 is a great balance for performance and visuals
      markerElevation: 0.01,
      markers: MARKERS,
      ...getThemeOptions(false),
    })

    let animationId = 0
    let isVisible = false

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      const nextWidth = Math.round(entry.contentRect.width)
      
      globeRef.current?.update({
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: nextWidth,
        height: nextWidth,
      })
    })
    resizeObserver.observe(canvas)

    function animate() {
      // Performance: Stop calculating/rendering if the canvas isn't on the screen
      if (!isVisible) return

      globeRef.current?.update({
        phi: phiOffsetRef.current + dragOffsetRef.current.phi,
      })
      animationId = requestAnimationFrame(animate)
    }

    // Performance: Pause rendering when not visible
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible) {
        animate() // Restart the animation loop when scrolling back into view
      }
    })
    intersectionObserver.observe(canvas)

    const fadeInId = requestAnimationFrame(() => {
      setReady(true)
    })

    return () => {
      cancelAnimationFrame(animationId)
      cancelAnimationFrame(fadeInId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      globeRef.current?.destroy()
      globeRef.current = null
    }
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark')
      globeRef.current?.update(getThemeOptions(isDark))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='relative flex h-60 flex-col gap-6 overflow-hidden rounded-2xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <MapPinIcon className='size-4.5' />
        <h2 className='text-sm'>{"India"}</h2>
      </div>
      <div className='relative mx-auto -mt-4 aspect-square max-w-125 select-none'>
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          data-ready={ready}
          className='aspect-square size-full cursor-grab touch-none opacity-0 transition-opacity data-[ready=true]:opacity-100'
        />
        {MARKERS.map((m) => (
          <div
            key={m.id}
            className='pointer-events-none absolute bottom-[anchor(top)] left-[anchor(center)] -translate-x-1/2 -translate-y-2 transition-[opacity,filter]'
            style={{
              positionAnchor: `--cobe-${m.id}`,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            }}
          >
            <Badge>{"Kochi, Kerala"}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}