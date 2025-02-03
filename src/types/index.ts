import { CLICK_CELL, PLAYERS_TIME_OVER } from "@/constants";

export type GameStateType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    winnerSequence: Array<number> | false;
    playersTimeOver: Array<SymbolValueType>;
};

export type winnerSequenceType = GameStateType["winnerSequence"];

export type CellType = null | SymbolValueType;

export type SizesType = {
    LARGE: "lg";
    MEDIUM: "md";
    SMALL: "sm";
};

export type SizesValueType = SizesType[keyof SizesType];

export type SymbolType = {
    ZERO: "zero";
    CROSS: "cross";
    SQUARE: "square";
    TRIANGLE: "triangle";
};

export type SymbolValueType = SymbolType[keyof SymbolType];

export type GameActionType =
    | { type: typeof CLICK_CELL; index: number }
    | { type: typeof PLAYERS_TIME_OVER; symbol: SymbolValueType };
