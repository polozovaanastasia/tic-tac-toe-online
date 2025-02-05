import {
    GAME_STATE_ACTIONS,
    GAME_SYMBOL,
    MOVE_ORDER,
    PLAYERS_COUNT,
} from "@/constants";
import { GameActionType, GameStateType, SymbolValueType } from "@/types";
import { TimersType } from "./../../../types/index";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

type InitGameStateParamsType = {
    playersCount: number;
    defaultTimer: number;
    currentMoveStart: number;
};

export function initGameState({
    playersCount,
    defaultTimer,
    currentMoveStart,
}: InitGameStateParamsType): GameStateType {
    return {
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOL.ZERO,
        currentMoveStart,
        winnerSequence: false,
        playersTimeOver: [],
        timers: MOVE_ORDER.slice(0, playersCount).reduce<TimersType>(
            (timers, symbol) => {
                timers[symbol] = defaultTimer;
                return timers;
            },
            {}
        ),
    };
}
export function gameStateReducer(state: GameStateType, action: GameActionType) {
    switch (action.type) {
        case GAME_STATE_ACTIONS.CLICK_CELL:
            const { index, now } = action;
            const { cells, currentMove, winnerSequence, playersTimeOver } =
                state;

            if (cells[index] || winnerSequence) return state;
            const cellsCopy = [...cells];
            cellsCopy[index] = currentMove;
            const winnerIndexes = computeWinner(cellsCopy);

            return {
                ...state,
                cells: cellsCopy,
                currentMove: getNextMove(
                    currentMove,
                    PLAYERS_COUNT,
                    playersTimeOver
                ),
                currentMoveStart: now,
                winnerSequence: winnerIndexes,
            };
        case GAME_STATE_ACTIONS.PLAYERS_TIME_OVER:
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

export function playersTimeOverActionCreator(
    symbol: SymbolValueType
): GameActionType {
    return {
        type: GAME_STATE_ACTIONS.PLAYERS_TIME_OVER,
        symbol,
    };
}

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
