import {
    GAME_STATE_ACTIONS,
    GAME_SYMBOL,
    MOVE_ORDER,
    PLAYERS_COUNT,
} from "@/constants";
import {
    GameActionType,
    GameStateType,
    SymbolValueType,
    TimersType,
} from "@/types";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

type InitGameStateParamsType = {
    defaultTimer: number;
    currentMoveStart: number;
};

export function initGameState({
    defaultTimer,
    currentMoveStart,
}: InitGameStateParamsType): GameStateType {
    return {
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOL.ZERO,
        currentMoveStart,
        winnerSequence: false,
        playersTimeOver: [],
        timers: MOVE_ORDER.reduce((timers, symbol) => {
            timers[symbol] = defaultTimer;
            return timers;
        }, {} as TimersType), // todo
    };
}
export function gameReducer(state: GameStateType, action: GameActionType) {
    switch (action.type) {
        case GAME_STATE_ACTIONS.CLICK_CELL:
            const { index, now } = action;
            const { cells, currentMove, winnerSequence, timers } = state;

            if (cells[index] || winnerSequence) return state;
            const updatedCells = updateCells(state, index, currentMove);
            const winnerIndexes = computeWinner(updatedCells);

            return {
                ...state,
                cells: updatedCells,
                currentMove: getNextMove(currentMove, PLAYERS_COUNT, timers),
                timers: updateTimer(state, now),
                currentMoveStart: now,
                winnerSequence: winnerIndexes,
            };
        // case GAME_STATE_ACTIONS.PLAYERS_TIME_OVER:
        //     return {
        //         ...state,
        //         playersTimeOver: [...state.playersTimeOver, action.symbol],
        //         currentMove: getNextMove(state.currentMove, PLAYERS_COUNT, timer),
        //     };
        default:
            return state;
    }
}

function updateTimer(state: GameStateType, now: number) {
    const diff = now - state.currentMoveStart;
    const timer = state.timers[state.currentMove];
    return { ...state.timers, [state.currentMove]: timer - diff };
}

function updateCells(
    state: GameStateType,
    index: number,
    currentMove: SymbolValueType
) {
    const cellsCopy = [...state.cells];
    cellsCopy[index] = currentMove;
    return cellsCopy;
}

// export function playersTimeOverActionCreator(
//     symbol: SymbolValueType
// ): GameActionType {
//     return {
//         type: GAME_STATE_ACTIONS.PLAYERS_TIME_OVER,
//         symbol,
//     };
// }

export function clickCellActionCreator(
    index: number,
    now: number
): GameActionType {
    return {
        type: GAME_STATE_ACTIONS.CLICK_CELL,
        index,
        now,
    };
}
