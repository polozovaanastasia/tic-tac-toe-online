"use client";

import { GAME_SYMBOL, MOVE_ORDER } from "@/constants";
import { CellType, gameStateType } from "@/types";
import { useState } from "react";

function useGameState(playersCount: number) {
    const [{ cells, currentMove, isWinner }, setGameState] =
        useState<gameStateType>(() => ({
            cells: new Array(19 * 19).fill(null),
            currentMove: GAME_SYMBOL.ZERO,
            isWinner: undefined,
        }));

    console.log(computeWinner(cells));
    const nextMove = getNextMove(playersCount);

    function getNextMove(playersCount: number) {
        const moveOrder = MOVE_ORDER.slice(0, playersCount);
        const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

        return moveOrder[nextMoveIndex] || moveOrder[0];
    }

    function computeWinner(
        cells: Array<CellType>,
        sequenceSize: number = 5,
        fieldSize: number = 19
    ) {
        function compareElements(indexes: Array<number>) {
            let result = true;
            for (let i = 1; i < indexes.length; i++) {
                result &&= !!cells[indexes[i]];
                result &&= cells[indexes[i]] === cells[indexes[i - 1]];
            }
            return result;
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
        return undefined;
    }

    function onCellClickHandler(index: number) {
        if (cells[index]) return;

        const cellsCopy: Array<CellType> = [...cells];
        cellsCopy[index] = currentMove;
        const winnerIndexes = computeWinner(cellsCopy);
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: cellsCopy,
            currentMove: nextMove,
            isWinner: winnerIndexes,
        }));
    }

    return {
        cells,
        currentMove,
        nextMove,
        isWinner,
        onCellClickHandler,
    };
    // const [cells, setCells] = useState<Array<CellType>>(Array(9).fill(null));
    // const [currentStep, setCurrentStep] = useState<SymbolValueType>(
    //     GAME_SYMBOL.ZERO
    // );
    // const [winnerSequence, setWinnerSequence] = useState<
    //     Array<number> | undefined
    // >();
    // const onCellClickHandler = (cell: CellType, index: number) => {
    //     if (cell || winnerSequence) return;
    //     const cellsCopy = [...cells];
    //     cellsCopy[index] = currentStep;
    //     setCells(cellsCopy);
    //     const winner = computeWinner(cellsCopy);
    //     if (winner) {
    //         setWinnerSequence(winner);
    //     } else {
    //         setCurrentStep(
    //             currentStep === GAME_SYMBOL.ZERO
    //                 ? GAME_SYMBOL.CROSS
    //                 : GAME_SYMBOL.ZERO
    //         );
    //     }
    // };
    // const computeWinner = (cells: Array<CellType>) => {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //     ];
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
    //             return [a, b, c];
    //     }
    // };
    // const isDraw = cells.every((cell) => cell);
    // const restartGame = () => {
    //     setCells(Array(9).fill(null));
    //     setCurrentStep(GAME_SYMBOL.ZERO);
    //     setWinnerSequence(undefined);
    // };
    // return {
    //     cells,
    //     currentStep,
    //     winnerSequence,
    //     isDraw,
    //     onCellClickHandler,
    //     restartGame,
    // };
}

export default useGameState;
