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
