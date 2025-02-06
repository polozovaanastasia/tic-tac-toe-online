import { SIZES } from "@/constants";
import { SymbolValueType } from "@/types";
import { GameSymbol } from "../GameSymbol/GameSymbol";
import styles from "./GameMoveInfo.module.css";

type GameMoveInfoPropsType = {
    currentMove: SymbolValueType;
    nextMove: SymbolValueType;
};

export function GameMoveInfo({ currentMove, nextMove }: GameMoveInfoPropsType) {
    return (
        <div className={styles["game-move-info"]}>
            <div className={styles["game-move-info__title"]}>
                Ход:
                <GameSymbol symbol={currentMove} size={SIZES.MEDIUM} />
            </div>
            <div className={styles["game-move-info__subtitle"]}>
                Следующий:
                <GameSymbol symbol={nextMove} />
            </div>
        </div>
    );
}
