import {
  ShieldCheck,
  BatteryCharging,
  Zap,
  Palette,
  Home,
  LifeBuoy,
  Sparkles,
  Gamepad2,
  Fingerprint,
  Bell,
  Lock,
  Layers,
  Gauge,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, TelegramIcon, LinkedinIcon } from "@/components/brand-icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const siteConfig = {
  name: "Project Blaze",
  tagline: "An AOSP-based operating system",
  description:
    "Project Blaze is an open-source, AOSP-based custom Android ROM that pairs a near-stock experience with deep customization, blazing performance and long battery life.",
  url: "https://www.projectblaze.co.in",
  androidVersion: "Android 15",
  links: {
    telegram: "https://t.me/projectblaze",
    telegramUpdates: "https://t.me/projectblazeupdates",
    github: "https://github.com/ProjectBlaze/",
    source: "https://github.com/ProjectBlaze/",
    maintainership: "https://github.com/ProjectBlaze/maintainership/",
    changelog:
      "https://github.com/ProjectBlaze/official_devices/blob/12.1/changelog.md",
    screenshots: "https://t.me/projectblazeupdates/98",
    sourceforge: "https://sourceforge.net/projects/projectblaze/",
    xda: "https://xdaforums.com/tags/project-blaze/",
    linkedin: "https://www.linkedin.com/company/projectblaze",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Aims", href: "/aims" },
  { label: "Features", href: "/features" },
  { label: "Downloads", href: "/download" },
  { label: "Team", href: "/team" },
] as const;

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Open Source",
    description:
      "Being open source, Blaze ensures 100% transparency. All sources are public and open for everyone to inspect, audit and contribute to.",
    icon: ShieldCheck,
  },
  {
    title: "Battery Beast",
    description:
      "Blaze delivers improved battery backup across all supported devices. A clean, bloat-free base means a hassle-free, long-lasting experience.",
    icon: BatteryCharging,
  },
  {
    title: "Fluid Response",
    description:
      "Committed to a fast and clean experience, Blaze ships with carefully tuned tweaks that keep every interaction silky smooth.",
    icon: Zap,
  },
  {
    title: "Stock UI, Your Way",
    description:
      "Get that stock Google touch, then make it yours — with all the customizations you need to fall in love with Blaze.",
    icon: Palette,
  },
  {
    title: "Blaze House",
    description:
      "Our unique customization center. Toggle every lovely feature from fonts to Monet theming, all from one beautiful place.",
    icon: Home,
  },
  {
    title: "Instant Support",
    description:
      "Get instant help for your device in our active Telegram community. Friendly maintainers and members, ready around the clock.",
    icon: LifeBuoy,
  },
];

export const extras: Feature[] = [
  {
    title: "GameSpace",
    description:
      "A dedicated gaming mode that silences distractions and squeezes out every drop of performance when it matters.",
    icon: Gamepad2,
  },
  {
    title: "UDFPS Customizations",
    description:
      "Tailor your in-display fingerprint animations and icons to match your personal aesthetic.",
    icon: Fingerprint,
  },
  {
    title: "Notification Tweaks",
    description:
      "Clear-all buttons, colored statusbar icons and a notification panel refined exactly how you like it.",
    icon: Bell,
  },
  {
    title: "MaterialYou + Classic QS",
    description:
      "Love the smaller, rounder Quick Settings tiles? Keep them — while retaining the goodness of MaterialYou theming.",
    icon: Sparkles,
  },
];

export const stats = [
  { value: "15+", label: "Official devices" },
  { value: "4.2★", label: "Rated on SourceForge" },
  { value: "2022", label: "Building since" },
  { value: "100%", label: "Open source" },
] as const;

export type Aim = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aims: Aim[] = [
  {
    title: "Privacy by default",
    description:
      "Blaze was born from a single idea — give people the best customization without trading away their privacy. That meant shipping microG as a de-Googled, security-first foundation so you stay in control of your data.",
    icon: Lock,
  },
  {
    title: "Best-in-class customization",
    description:
      "From fonts and Monet theming to statusbar, lockscreen and Quick Settings tweaks, Blaze House puts an enormous amount of control at your fingertips — without ever feeling cluttered.",
    icon: Palette,
  },
  {
    title: "Optimized, considered design",
    description:
      "What started as a customization ROM evolved into a design philosophy: thoughtful, optimized layouts that respect stock Android while refining every detail for clarity and speed.",
    icon: Layers,
  },
  {
    title: "Performance without compromise",
    description:
      "A clean, bloat-free base, a tuned device tree and fewer background processes mean a phone that stays fast and cool, with battery life that lasts.",
    icon: Gauge,
  },
  {
    title: "Transparent & open",
    description:
      "Every line of source is public on GitHub. Security patches land at least twice a month, and anyone can audit, learn from, or contribute to the project.",
    icon: ShieldCheck,
  },
  {
    title: "A community, not just a ROM",
    description:
      "Blaze is built with and for its community. Active maintainers, responsive support and an enthusiastic user base keep the project alive and evolving.",
    icon: Users,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  handle: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Another smooth Android 13 custom ROM — clean, stable and exactly what daily drivers want. Project Blaze just works.",
    name: "Tech Reviewer",
    handle: "YouTube review",
    source: "Project Blaze 2.8 review",
  },
  {
    quote:
      "A custom ROM which will never disappoint you. The QPR build feels polished and the customizations are genuinely useful.",
    name: "Custom ROM Channel",
    handle: "YouTube review",
    source: "Project Blaze 3.6 review",
  },
  {
    quote:
      "Muito limpa — incredibly clean build. Great performance on a 64-bit base with no bloat to slow things down.",
    name: "ROM Enthusiast",
    handle: "YouTube review",
    source: "Project Blaze 2.9 review",
  },
  {
    quote:
      "Near-stock feel with all the customization I need. Battery life improved noticeably after switching to Blaze.",
    name: "Blaze Community",
    handle: "Telegram member",
    source: "Community group",
  },
  {
    quote:
      "The best AOSP custom ROM experience on Android 13? After daily driving it, I'd say it's right up there.",
    name: "Mobile Tech",
    handle: "YouTube review",
    source: "Project Blaze V2.8 review",
  },
  {
    quote:
      "Twice-a-month security patches and a fully open source tree. This is how a custom ROM should be run.",
    name: "XDA Member",
    handle: "XDA Forums",
    source: "Official thread",
  },
];

export type Video = {
  id: string;
  title: string;
  channel: string;
  featured?: boolean;
};

export const videos: Video[] = [
  {
    id: "g38dGICm0a4",
    title: "Project Blaze — Official Announcement by Ram Pandey",
    channel: "Ram Pandey · Developer",
    featured: true,
  },
  {
    id: "1x13IztrP0Q",
    title: "Project Blaze V2.8 — Best AOSP Custom ROM Experience? ft. Android 13",
    channel: "YouTube review",
  },
  {
    id: "9m4UZ812AeY",
    title: "Project Blaze 3.6 — Custom ROM which will never disappoint you 🔥",
    channel: "YouTube review",
  },
  {
    id: "Td7XG8mseGw",
    title: "Project Blaze 2.8 Android 13 Official ROM Review — Redmi 7 / Y3",
    channel: "YouTube review",
  },
  {
    id: "5-l2jlksi_4",
    title: "Project Blaze 3.8 Custom ROM Review — Poco X4 Pro",
    channel: "YouTube review",
  },
  {
    id: "eH93KAYXrBI",
    title: "Project Blaze 1.4 Official — Android 12.1 Review",
    channel: "YouTube review",
  },
  {
    id: "wmbdDGUDzVI",
    title: "Project Blaze 1.3 Official — Android 12L Review",
    channel: "YouTube review",
  },
];

export type Forum = {
  title: string;
  meta: string;
  href: string;
};

export const forums: Forum[] = [
  {
    title: "Project Blaze on XDA Forums",
    meta: "All official & unofficial threads, tagged",
    href: "https://xdaforums.com/tags/project-blaze/",
  },
  {
    title: "ProjectBlaze v4.0 — Android 15 (Poco X3 Pro)",
    meta: "XDA · Development thread",
    href: "https://xdaforums.com/t/projectblaze-v4-0-android-15-for-poco-x3-pro.4667088/",
  },
  {
    title: "ProjectBlaze — Pixel 6a (Bluejay)",
    meta: "XDA · Official stable thread",
    href: "https://xdaforums.com/t/rom-14-official-stable-projectblaze-bluejay-30-04-2024.4669517/",
  },
  {
    title: "ProjectBlaze v3.3 — Android 14 (X00TD)",
    meta: "XDA · Official thread",
    href: "https://xdaforums.com/t/rom-project-blaze-v3-3-official-android-14-x00td.4672752/",
  },
  {
    title: "Downloads on SourceForge",
    meta: "All builds · GApps & Vanilla",
    href: "https://sourceforge.net/projects/projectblaze/",
  },
  {
    title: "Telegram Community",
    meta: "Live support & updates",
    href: "https://t.me/projectblaze",
  },
];

export const variants = [
  {
    name: "GApps",
    description:
      "Comes with Google apps and services pre-installed — SetupWizard, Play Store and biometrics work out of the box.",
    highlights: ["Google apps included", "SetupWizard", "Plug & play"],
    recommended: true,
  },
  {
    name: "Vanilla",
    description:
      "A pure, Google-free build for maximum privacy and the lightest footprint. Add your own apps your way.",
    highlights: ["No Google services", "Maximum privacy", "Smallest footprint"],
    recommended: false,
  },
] as const;

export type Doubt = {
  question: string;
  answer: string;
  accent: string;
};

export const doubts: Doubt[] = [
  {
    question: "Are custom ROMs safe?",
    answer:
      "Unlocking your bootloader might sound suspicious, but the advantages of a custom ROM easily outnumber the risks. They don't contain bloatware and are updated more regularly than most vendors. Worried about security? Custom ROM developers update their sources at least twice a month, ensuring the latest Google security patches. The entire source code is public on GitHub for anyone to inspect. Pro tip: don't trust YouTubers who declare custom ROMs dangerous without any research.",
    accent: "#22c55e",
  },
  {
    question: "Prerequisites for installing custom ROMs",
    answer:
      "All Android devices follow a similar process. The first thing required is unlocking the bootloader. Some vendors use an external unlock tool, others just a couple of adb commands. If you get stuck, there's always documentation and YouTube to the rescue. Important: unlocking the bootloader will WIPE ALL DATA on the phone, so be sure to back up your important files first.",
    accent: "#06b6d4",
  },
  {
    question: "Busting some common myths",
    answer:
      "Beginners often assume root is mandatory — it isn't. Root is entirely optional; you can install custom ROMs without it. Another myth is that custom ROMs magically increase performance. Instead, developers optimize the device tree for fewer hardware resources and remove unnecessary components, indirectly giving the phone more freedom to perform better.",
    accent: "#6366f1",
  },
  {
    question: "Stock OEM vs Project Blaze",
    answer:
      "Stock OEMs ship with lots of bloatware that uses more resources than intended, with background processes that drain battery and cause stutters — some even collect and send user data to third-party servers. Project Blaze strips all of that away, providing a clean experience with customizations out of the box, plus handy components like SetupWizard so you can restore apps, encrypt your phone and register biometrics without hassle.",
    accent: "#3b82f6",
  },
  {
    question: "Finally, why Project Blaze?",
    answer:
      "Blaze stands out from other ROMs. Remember the smaller, round Quick Settings tiles from earlier Android versions that looked so clean? Blaze keeps them while retaining MaterialYou theming. It's a customization-rich ROM where you tweak the UI to your needs, with extras like GameSpace, colored statusbar icons, UDFPS customizations, a clear-all notifications button and a ton more.",
    accent: "#f97316",
  },
];

export type Founder = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
  socials: { label: string; href: string; icon: IconType }[];
};

export const founders: Founder[] = [
  {
    name: "Aditya Pratap Singh",
    role: "Founder",
    bio: "Founder of Project Blaze. Sets the vision and direction of the project and maintains the source — the foundation everything else is built on.",
    initials: "AP",
    image: "/aditya.jpg",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aditya-pratap-singh-5099ab217/",
        icon: LinkedinIcon,
      },
      { label: "GitHub", href: "https://github.com/afterallafk", icon: GithubIcon },
      { label: "Telegram", href: siteConfig.links.telegram, icon: TelegramIcon },
    ],
  },
  {
    name: "Ram Pandey",
    role: "Co-Founder & Developer",
    bio: "Co-founder and developer at Project Blaze. Builds and maintains the website, looks after device support and drives day-to-day development across the project.",
    initials: "RP",
    image: "/ram.jpeg",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mrtechnostart/",
        icon: LinkedinIcon,
      },
      { label: "GitHub", href: "https://github.com/mrtechnostart", icon: GithubIcon },
      { label: "Telegram", href: siteConfig.links.telegram, icon: TelegramIcon },
    ],
  },
];
