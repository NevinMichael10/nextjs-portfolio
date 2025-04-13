import { BarChartIcon, FlameIcon, MessageCircleIcon, MonitorIcon, PencilIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export const HEADER_LINKS = [
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/about",
    key: "About",
  },
  {
    icon: <BarChartIcon className="size-3.5" />,
    href: "/projects",
    key: "Projects",
  },
  {
    icon: <MessageCircleIcon className="size-3.5" />,
    href: "/journey",
    key: "Journey",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/certs",
    key: "Certs",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/tech",
    key: "Tech",
  },
] as const;

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: "/", key: "Home" },
      { href: "/about", key: "About" },
      { href: "/projects", key: "Projects" },
    ],
  },
  {
    id: 2,
    links: [
      { href: "/Journey", key: "Journey" },
      { href: "/certs", key: "Certs" },
      { href: "/tech", key: "Tech" },
    ],
  },
  {
    id: 3,
    links: SOCIAL_LINKS.map((link) => ({
      href: link.href,
      key: link.title,
    })),
  },
] as const;