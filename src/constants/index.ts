import { SymbolType } from "@/types";

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
