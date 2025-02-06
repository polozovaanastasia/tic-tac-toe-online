import { MOVE_ORDER } from "@/constants";
import { SymbolValueType } from "@/types";
import { TimersType } from "./../../../types/index";

export function getNextMove(
    currentMove: SymbolValueType,
    playersCount: number,
    timers: TimersType
) {
    const moveOrder = MOVE_ORDER.slice(0, playersCount).filter(
        (symbol) => timers[symbol] > 0
    );
    const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;

    return moveOrder[nextMoveIndex] || moveOrder[0];
}
