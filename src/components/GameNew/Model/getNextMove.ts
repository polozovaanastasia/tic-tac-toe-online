"use client";
import { MOVE_ORDER } from "@/constants";
import { SymbolValueType } from "@/types";

export function getNextMove(
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
