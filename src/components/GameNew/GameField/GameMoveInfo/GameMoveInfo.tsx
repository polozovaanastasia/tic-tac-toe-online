import styles from "./GameMoveInfo.module.css";
import ZeroIcon from "@/components/Icons/ZeroIcon";
import CrossIcon from "@/components/Icons/СrossIcon";
import React from "react";
import { SymbolValueType } from "@/types";
import { GAME_SYMBOL } from "@/constants";
import SquareIcon from "@/components/Icons/SquareIcon";
import TriangleIcon from "@/components/Icons/TriangleIcon";

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
    function renderMoveIcons(symbol: SymbolValueType) {
        if (symbol === GAME_SYMBOL.ZERO) return <ZeroIcon />;
        if (symbol === GAME_SYMBOL.CROSS) return <CrossIcon />;
        if (symbol === GAME_SYMBOL.SQUARE) return <SquareIcon />;
        if (symbol === GAME_SYMBOL.TRIANGLE) return <TriangleIcon />;
    }
    return (
        <div className={styles["game-move-info"]}>
            <div className={styles["game-move-info__container"]}>
                <div className={styles["game-move-info__title"]}>
                    Ход:
                    {renderMoveIcons(currentMove)}
                </div>
                <div className={styles["game-move-info__subtitle"]}>
                    Следующий:
                    {renderMoveIcons(nextMove)}
                </div>
            </div>
            {actions}
        </div>
    );
}

export default GameMoveInfo;
