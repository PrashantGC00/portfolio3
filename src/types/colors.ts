export type StatueColor = {
    primary: string;
    secondary: string;
    floor: string;
    text: string;
};

export const COLORS: Record<string, StatueColor> = {
    4: {
        primary: "#8B5A2B",
        secondary: "#A0522D",
        floor: "#D2B48C",
        text: "text-amber-900",
    },
    2: {
        primary: "#006400",
        secondary: "#228B22",
        floor: "#90EE90",
        text: "text-green-900",
    },
    3: {
        primary: "#FFD700",
        secondary: "#FFEA00",
        floor: "#FFFACD",
        text: "text-yellow-800",
    },
    1: {
        primary: "#FFFFFF",
        secondary: "#F0F0F0",
        floor: "#FFFFFF",
        text: "text-gray-900",
    },
    5: {
        primary: "#000000",
        secondary: "#FFFFFF",
        floor: "#AAAAAA",
        text: "text-white",
    },
};