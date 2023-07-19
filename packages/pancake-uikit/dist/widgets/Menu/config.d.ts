import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    initialOpenState?: undefined;
    items?: undefined;
    status?: undefined;
} | {
    label: string;
    icon: string;
    initialOpenState: boolean;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    status?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    status: LinkStatus;
    initialOpenState?: undefined;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
        status: LinkStatus;
    }[];
    href?: undefined;
    initialOpenState?: undefined;
    status?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    initialOpenState?: undefined;
    status?: undefined;
})[];
export declare const socials: {
    label: string;
    icon: string;
    href: string;
}[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
