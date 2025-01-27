import styles from "./GameCell.module.css";
import { CellType } from "../../../types/index";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SYMBOL_O, SYMBOL_X } from "@/constants";

type GameCellPropsType = {
    cell: CellType;
    winnerSequence: boolean;
    onClickHandler: () => void;
};

function GameCell({ cell, winnerSequence, onClickHandler }: GameCellPropsType) {
    const GameCellClassName = `${styles["game-cell"]} ${
        winnerSequence ? styles["game-cell_winner"] : ""
    } ${
        cell === SYMBOL_X
            ? styles["game-cell_X"]
            : cell === SYMBOL_O
            ? styles["game-cell_O"]
            : ""
    }`;

    return (
        <span className={GameCellClassName} onClick={onClickHandler}>
            <GameSymbol symbol={cell} />
        </span>
    );
}

export default GameCell;
