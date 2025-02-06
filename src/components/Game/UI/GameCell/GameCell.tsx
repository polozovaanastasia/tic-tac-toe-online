import { SIZES } from "@/constants";
import { SymbolValueType } from "@/types";
import classNames from "classnames";
import { GameSymbol } from "../GameSymbol/GameSymbol";
import styles from "./GameCell.module.css";

type GameCellPropsType = {
    symbol: SymbolValueType | null;
    isWinner: boolean;
    onClick: () => void;
};

export function GameCell({ symbol, isWinner, onClick }: GameCellPropsType) {
    const GameCellClasses = classNames(
        styles["game-cell"],
        isWinner && styles["game-cell_winner"]
    );
    return (
        <button className={GameCellClasses} onClick={onClick}>
            {symbol && <GameSymbol symbol={symbol} size={SIZES.MEDIUM} />}
        </button>
    );
}
