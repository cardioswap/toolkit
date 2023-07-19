import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Buy',
    icon: 'PoolIcon',
    href: '/buy',
    status: status.SOON,
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: '/',
        status: status.SOON,
      },
      {
        label: 'Tokens',
        href: '/',
        status: status.SOON,
      },
      {
        label: 'Pairs',
        href: '/',
        status: status.SOON,
      },
      {
        label: 'Accounts',
        href: '/',
        status: status.SOON,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cardioswap',
      },
      {
        label: 'Docs',
        href: 'https://github.com/cardioswap',
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/cardioswap",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/cardioswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
