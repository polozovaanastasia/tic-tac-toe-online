import GameGrid from "../GameGrid/GameGrid";
import UIButtons from "../../uikit/Button/UIButton";
import styles from "./GameField.module.css";
import GameMoveInfo from "./GameMoveInfo/GameMoveInfo";
import { SIZES } from "@/constants";
import { CellType, SymbolValueType } from "@/types";

type GameFieldPropsType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    nextMove: SymbolValueType;
    onCellClickHandler: (i: number) => void;
};

function GameField({
    cells,
    currentMove,
    nextMove,
    onCellClickHandler,
}: GameFieldPropsType) {
    const actions = (
        <>
            <UIButtons variant="primary" size={SIZES.MEDIUM} onClick={() => {}}>
                Ничья
            </UIButtons>
            <UIButtons variant="outline" size={SIZES.MEDIUM} onClick={() => {}}>
                Сдаться
            </UIButtons>
        </>
    );
    return (
        <div className={styles["game-field"]}>
            <GameMoveInfo
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            ></GameMoveInfo>
            <GameGrid cells={cells} onCellClick={onCellClickHandler} />
        </div>
    );
}

export default GameField;
