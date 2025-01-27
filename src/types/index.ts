export type gameStateType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    winnerSequence: Array<number> | false;
    playersTimeOver: Array<SymbolValueType>;
};

export type winnerSequenceType = gameStateType["winnerSequence"];

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
