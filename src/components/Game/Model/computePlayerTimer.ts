import { DEFAULT_TIMER } from "@/constants";
import { SymbolValueType, TimersType } from "@/types";

export function computePlayerTimer(
    currentPlayer: SymbolValueType,
    currentMove: SymbolValueType,
    timers: TimersType,
    timer: number
) {
    return {
        timer: timers[currentPlayer] ?? DEFAULT_TIMER,
        timerStartAt: currentPlayer === currentMove ? timer : undefined,
    };
}
