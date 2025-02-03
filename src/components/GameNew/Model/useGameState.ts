import {
    CLICK_CELL,
    GAME_SYMBOL,
    PLAYERS_COUNT,
    PLAYERS_TIME_OVER,
} from "@/constants";
import { GameActionType, GameStateType, SymbolValueType } from "@/types";
import { useReducer } from "react";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

function gameReducer(state: GameStateType, action: GameActionType) {
    switch (action.type) {
        case CLICK_CELL:
            const cellsCopy = [...state.cells];
            cellsCopy[action.index] = state.currentMove;
            const winnerIndexes = computeWinner(cellsCopy);

            return {
                ...state,
                cells: cellsCopy,
                currentMove: getNextMove(
                    state.currentMove,
                    PLAYERS_COUNT,
                    state.playersTimeOver
                ),
                winnerSequence: winnerIndexes,
            };
        case PLAYERS_TIME_OVER:
            return {
                ...state,
                playersTimeOver: [...state.playersTimeOver, action.symbol],
                currentMove: getNextMove(
                    state.currentMove,
                    PLAYERS_COUNT,
                    state.playersTimeOver
                ),
            };
        default:
            return state;
    }
}

function playersTimeOverActionCreator(symbol: SymbolValueType): GameActionType {
    return {
        type: PLAYERS_TIME_OVER,
        symbol,
    };
}

function clickCellActionCreator(index: number): GameActionType {
    return {
        type: CLICK_CELL,
        index,
    };
}

export function useGameState(playersCount: number) {
    const [{ cells, currentMove, winnerSequence, playersTimeOver }, dispatch] =
        useReducer(gameReducer, {
            cells: new Array(19 * 19).fill(null),
            currentMove: GAME_SYMBOL.ZERO,
            winnerSequence: false,
            playersTimeOver: [],
        });

    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
    const winnerSymbol =
        nextMove === currentMove
            ? currentMove
            : winnerSequence
            ? cells[winnerSequence[0]]
            : null;

    function onCellClickHandler(index: number) {
        if (cells[index] || winnerSequence) return;
        dispatch(clickCellActionCreator(index));
    }

    function onPlayersTimeOverHandler(symbol: SymbolValueType) {
        dispatch(playersTimeOverActionCreator(symbol));
    }

    return {
        cells,
        currentMove,
        nextMove,
        winnerSequence,
        winnerSymbol,
        onCellClickHandler,
        onPlayersTimeOverHandler,
    };
}
