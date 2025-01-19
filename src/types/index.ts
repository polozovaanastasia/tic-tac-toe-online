export type CellType = null | SymbolValueType;

export type SymbolType = {
    ZERO: "zero";
    CROSS: "cross";
    SQUARE: "square";
    TRIANGLE: "triangle";
};

export type SymbolValueType = SymbolType[keyof SymbolType];
