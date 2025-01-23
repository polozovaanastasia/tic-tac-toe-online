"use client";

import { GAME_SYMBOL, MOVE_ORDER } from "@/constants";
import { CellType, gameStateType } from "@/types";
import { useState } from "react";

function useGameState() {
    const [{ cells, currentMove }, setGameState] = useState<gameStateType>(
        () => ({
            cells: new Array(19 * 19).fill(null),
            currentMove: GAME_SYMBOL.ZERO,
        })
    );
    const nextMove = getNextMove();

    function getNextMove() {
        const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
        return MOVE_ORDER[nextMoveIndex] || MOVE_ORDER[0];
    }

    function onCellClickHandler(index: number) {
        if (cells[index]) return;

        const cellsCopy: Array<CellType> = [...cells];
        cellsCopy[index] = currentMove;
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: cellsCopy,
            currentMove: nextMove,
        }));
    }

    return {
        cells,
        currentMove,
        nextMove,
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
