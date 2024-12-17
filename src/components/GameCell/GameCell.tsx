import styles from "./GameCell.module.css";
import { CellType, SYMBOL_O, SYMBOL_X, SymbolType } from "../../types/index";
import GameSymbol from "../GameSymbol/GameSymbol";

type GameCellPropsType = {
    cell: CellType;
    index: number;
    currentStep: SymbolType;
    isWinner: boolean;
    onClickHandler: () => void;
};

function GameCell({
    cell,
    index,
    currentStep,
    isWinner,
    onClickHandler,
}: GameCellPropsType) {
    const GameCellClassName = `${styles["game-cell"]} ${
        isWinner ? styles["game-cell_winner"] : ""
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
