"use client";

import { GAME_SYMBOL, MOVE_ORDER } from "@/constants";
import { CellType, gameStateType, SymbolValueType } from "@/types";
import { useState } from "react";

function useGameState(playersCount: number) {
    const [
        { cells, currentMove, winnerSequence, playersTimeOver },
        setGameState,
    ] = useState<gameStateType>(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOL.ZERO,
        winnerSequence: false,
        playersTimeOver: [],
    }));

    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

    function getNextMove(
        currentMove: SymbolValueType,
        playersCount: number,
        playersTimeOver: Array<SymbolValueType>
    ) {
        const moveOrder = MOVE_ORDER.slice(0, playersCount).filter(
            (symbol) => !playersTimeOver.includes(symbol)
        );
        const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

        return moveOrder[nextMoveIndex] || moveOrder[0];
    }

    function computeWinner(
        cells: Array<CellType>,
        sequenceSize: number = 5,
        fieldSize: number = 19
    ) {
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
                const winerIndexes = indexesRows.find((row) =>
                    compareElements(row)
                );
                if (winerIndexes) return winerIndexes;
            }
        }
        return false;
    }

    function onCellClickHandler(index: number) {
        if (cells[index] || winnerSequence) return;
        const cellsCopy: Array<CellType> = [...cells];
        cellsCopy[index] = currentMove;
        const winnerIndexes = computeWinner(cellsCopy);
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: cellsCopy,
            currentMove: getNextMove(
                lastGameState.currentMove,
                playersCount,
                playersTimeOver
            ),
            winnerSequence: winnerIndexes,
        }));
    }

    function onPlayersTimeOverHandler(symbol: SymbolValueType) {
        setGameState((lastGameState) => ({
            ...lastGameState,
            playersTimeOver: [...lastGameState.playersTimeOver, symbol],
            currentMove: getNextMove(
                lastGameState.currentMove,
                playersCount,
                playersTimeOver
            ),
        }));
    }

    return {
        cells,
        currentMove,
        nextMove,
        winnerSequence,
        onCellClickHandler,
        onPlayersTimeOverHandler,
    };
}

export default useGameState;
