import GameGrid from "../GameGrid/GameGrid";
import UIButtons from "../../uikit/UIButton/UIButton";
import styles from "./GameField.module.css";
import GameMoveInfo from "./GameMoveInfo/GameMoveInfo";
import { SIZES } from "@/constants";
import { CellType, winnerSequenceType, SymbolValueType } from "@/types";

type GameFieldPropsType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    nextMove: SymbolValueType;
    winnerSequence: winnerSequenceType;
    onCellClickHandler: (i: number) => void;
};

function GameField({
    cells,
    currentMove,
    nextMove,
    winnerSequence,
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
            <GameGrid
                cells={cells}
                winnerSequence={winnerSequence}
                onCellClick={onCellClickHandler}
            />
        </div>
    );
}

export default GameField;
