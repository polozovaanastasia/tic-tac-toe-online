import styles from "./GameMoveInfo.module.css";
import React from "react";
import { SymbolValueType } from "@/types";
import GameSymbol from "../../GameSymbol/GameSymbol";
import { SIZES } from "@/constants";

type GameMoveInfoPropsType = {
    actions: React.ReactNode;
    currentMove: SymbolValueType;
    nextMove: SymbolValueType;
};

function GameMoveInfo({
    actions,
    currentMove,
    nextMove,
}: GameMoveInfoPropsType) {
    return (
        <div className={styles["game-move-info"]}>
            <div className={styles["game-move-info__container"]}>
                <div className={styles["game-move-info__title"]}>
                    Ход:
                    <GameSymbol symbol={currentMove} size={SIZES.MEDIUM} />
                </div>
                <div className={styles["game-move-info__subtitle"]}>
                    Следующий:
                    <GameSymbol symbol={nextMove} />
                </div>
            </div>
            {actions}
        </div>
    );
}

export default GameMoveInfo;
