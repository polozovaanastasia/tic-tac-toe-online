import { GAME_STATE_ACTIONS } from "@/constants";

export type GameStateType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    currentMoveStart: number;
    winnerSequence: Array<number> | false;
    playersTimeOver: Array<SymbolValueType>;
    timers: {
        [key in SymbolValueType]: number;
    };
};

export type WinnerSequenceType = GameStateType["winnerSequence"];
export type TimersType = GameStateType["timers"];

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
    | { type: typeof GAME_STATE_ACTIONS.CLICK_CELL; index: number; now: number }
    | {
          type: typeof GAME_STATE_ACTIONS.TICK;
          now: number;
      };
