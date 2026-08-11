"use client"
import { cn } from '@/lib/utils'
import NextImage from 'next/image'
import { useState } from 'react'

type ImageProps = {
  imageClassName?: string
  lazy?: boolean
} & React.ComponentProps<typeof NextImage>

const BlurImage = (props: ImageProps) => {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props
  // Priority (eager) images skip the blur state entirely so they don't appear
  // greyed-out while JS hydrates — this is critical for LCP images.
  const [isLoading, setIsLoading] = useState(lazy)

  return (
    <div className={cn('overflow-hidden', isLoading && 'animate-pulse', className)}>
      <NextImage
        className={cn(isLoading && 'scale-[1.02] blur-xl grayscale', imageClassName)}
        style={{
          transition: 'filter 700ms ease, scale 150ms ease'
        }}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        priority={!lazy}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  )
}

export { BlurImage }