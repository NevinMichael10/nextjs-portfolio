import {
    SiFacebook,
    SiGithub,
    SiInstagram,
  } from '@icons-pack/react-simple-icons'
  import {
    BarChartIcon,
    FlameIcon,
    MessageCircleIcon,
    MonitorIcon,
    PencilIcon,
  } from 'lucide-react'
  import { FaLinkedinIn } from "react-icons/fa";

  import {
    SITE_FACEBOOK_URL,
    SITE_GITHUB_URL,
    SITE_INSTAGRAM_URL,
    SITE_LINKEDIN_URL,
  } from '@/lib/constant'
  
  export const HEADER_LINKS = [
    {
      icon: <PencilIcon className='size-3.5' />,
      href: '/about',
      key: 'About'
    },
    {
      icon: <MessageCircleIcon className='size-3.5' />,
      href: '/education',
      key: 'Education'
    },
    {
      icon: <BarChartIcon className='size-3.5' />,
      href: '/projects',
      key: 'Projects'
    },
    {
      icon: <FlameIcon className='size-3.5' />,
      href: '/tech',
      key: 'Tech'
    },
    {
      icon: <MonitorIcon className='size-3.5' />,
      href: '/uses',
      key: 'Uses'
    }
  ] as const
  
  export const FOOTER_LINKS = [
    {
      id: 1,
      links: [
        { href: '/', key: 'Home' },
        { href: '/about', key: 'About' },
        { href: '/education', key: 'Education' },
        { href: '/projects', key: 'Projects' }
      ]
    },
    {
      id: 2,
      links: [
        { href: '/uses', key: 'Uses' },
        { href: '/projects', key: 'Projects' },
        { href: '/links', key: 'Links' }
      ]
    },
    {
      id: 3,
      links: [
        { href: SITE_FACEBOOK_URL, key: 'Facebook' },
        { href: SITE_INSTAGRAM_URL, key: 'Instagram' },
        { href: SITE_GITHUB_URL, key: 'Github' },
        { href: SITE_LINKEDIN_URL, key: 'Linkedin' }
      ]
    }
  ] as const
  
  export const SOCIAL_LINKS = [
    {
      href: SITE_GITHUB_URL,
      title: 'GitHub',
      icon: SiGithub
    },
    {
      href: SITE_FACEBOOK_URL,
      title: 'Facebook',
      icon: SiFacebook
    },
    {
      href: SITE_INSTAGRAM_URL,
      title: 'Instagram',
      icon: SiInstagram
    },
    {
      href: SITE_LINKEDIN_URL,
      title: 'LinkedIn',
      icon: FaLinkedinIn
    },
  ]
  