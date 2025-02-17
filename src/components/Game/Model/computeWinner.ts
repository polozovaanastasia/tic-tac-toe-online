"use client";
import { CellType, WinnerSequenceType } from "@/types";

export function computeWinner(
    cells: Array<CellType>,
    sequenceSize: number = 3,
    fieldSize: number = 19
): WinnerSequenceType {
    function compareElements(indexes: Array<number>) {
        const symbol = cells[indexes[0]];
        return indexes.every((index) => cells[index] === symbol);
    }
    function getSequenceIndexes(i: number) {
        const res: Array<Array<number>> = [
            [], // -
            [], // \
            [], // /
            [], // |
        ];

        for (let j = 0; j < sequenceSize; j++) {
            res[0].push(i + j);
            res[1].push(i + fieldSize * j + j);
            res[2].push(i - fieldSize * j + j);
            res[3].push(i + fieldSize * j);
        }
        return res;
    }

    for (let i = 0; i < cells.length; i++) {
        if (cells[i]) {
            const indexesRows = getSequenceIndexes(i);
            const winnerIndexes = indexesRows.find((row) =>
                compareElements(row)
            );
            if (winnerIndexes) return winnerIndexes;
        }
    }
    return false;
}
