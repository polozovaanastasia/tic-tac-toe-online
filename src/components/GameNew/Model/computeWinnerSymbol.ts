import { CellType, SymbolValueType, WinnerSequenceType } from "@/types";

export function computeWinnerSymbol(
    cells: Array<CellType>,
    currentMove: SymbolValueType,
    nextMove: SymbolValueType,
    winnerSequence: WinnerSequenceType
) {
    return nextMove === currentMove
        ? currentMove
        : winnerSequence
        ? cells[winnerSequence[0]]
        : null;
}
