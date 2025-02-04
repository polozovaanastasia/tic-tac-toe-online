import { GAME_STATE_ACTIONS, GAME_SYMBOL, PLAYERS_COUNT } from "@/constants";
import { GameActionType, GameStateType, SymbolValueType } from "@/types";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

export const initialGameState: GameStateType = {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOL.ZERO,
    winnerSequence: false,
    playersTimeOver: [],
};

export function gameStateReducer(state: GameStateType, action: GameActionType) {
    switch (action.type) {
        case GAME_STATE_ACTIONS.CLICK_CELL:
            if (state.cells[action.index] || state.winnerSequence) return state;
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

export function clickCellActionCreator(index: number): GameActionType {
    return {
        type: GAME_STATE_ACTIONS.CLICK_CELL,
        index,
    };
}
