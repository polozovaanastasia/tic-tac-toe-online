import { SizesType, SymbolType } from "@/types";

export const SIZES: SizesType = {
    LARGE: "lg",
    MEDIUM: "md",
    SMALL: "sm",
};

export const UIBUTTON_VARIANT: SizesType = {
    LARGE: "lg",
    MEDIUM: "md",
    SMALL: "sm",
};

export const GAME_SYMBOL: SymbolType = {
    ZERO: "zero",
    CROSS: "cross",
    SQUARE: "square",
    TRIANGLE: "triangle",
};

export const MOVE_ORDER = [
    GAME_SYMBOL.ZERO,
    GAME_SYMBOL.CROSS,
    GAME_SYMBOL.SQUARE,
    GAME_SYMBOL.TRIANGLE,
];

export const CLICK_CELL = "CLICK-CELL";
export const PLAYERS_TIME_OVER = "PLAYERS-TIME-OVER";

export const PLAYERS_COUNT = 2;

export const PLAYERS = [
    {
        id: 2,
        name: "Alex",
        rating: 220,
        symbol: GAME_SYMBOL.ZERO,
        time: 30,
        avatar: "/images/avatar2.png",
    },
    {
        id: 3,
        name: "Soomi",
        rating: 112233445566778899,
        symbol: GAME_SYMBOL.CROSS,
        time: 30,
        avatar: "/images/avatar.png",
    },
    {
        id: 1,
        name: "Polozova",
        rating: 230,
        symbol: GAME_SYMBOL.TRIANGLE,
        time: 30,
        avatar: "/images/avatar.png",
    },
    {
        id: 4,
        name: "Viliam Dacarad",
        rating: 5220,
        symbol: GAME_SYMBOL.SQUARE,
        time: 30,
        avatar: "/images/avatar2.png",
    },
];
