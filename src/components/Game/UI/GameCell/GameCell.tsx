import { SIZES } from "@/constants";
import { SymbolValueType } from "@/types";
import classNames from "classnames";
import { memo } from "react";
import { GameSymbol } from "../GameSymbol/GameSymbol";
import styles from "./GameCell.module.css";

type GameCellPropsType = {
    symbol: SymbolValueType | null;
    index: number;
    isWinner: boolean;
    onClick: (i: number) => void;
};

export const GameCell = memo(function GameCell({
    symbol,
    index,
    isWinner,
    onClick,
}: GameCellPropsType) {
    console.log(symbol);
    const GameCellClasses = classNames(
        styles["game-cell"],
        isWinner && styles["game-cell_winner"]
    );
    return (
        <button
            className={GameCellClasses}
            onClick={() => {
                onClick(index);
            }}
        >
            {symbol && <GameSymbol symbol={symbol} size={SIZES.MEDIUM} />}
        </button>
    );
});
