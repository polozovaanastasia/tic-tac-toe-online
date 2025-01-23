import GameGrid from "../GameGrid/GameGrid";
import UIButtons from "../../uikit/Button/UIButton";
import styles from "./GameField.module.css";
import { CellType, SymbolValueType } from "@/types";
import GameMoveInfo from "./GameMoveInfo/GameMoveInfo";
import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER, SIZES } from "@/constants";

type gameStateType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
};

function GameField() {
    const [gameState, setGameState] = useState<gameStateType>(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOL.ZERO,
    }));
    const nextMove = getNextMove();

    function getNextMove() {
        const nextMoveIndex = MOVE_ORDER.indexOf(gameState.currentMove) + 1;
        return MOVE_ORDER[nextMoveIndex] || MOVE_ORDER[0];
    }

    function onCellClickHandler(index: number) {
        if (gameState.cells[index]) return;

        const cellsCopy: Array<CellType> = [...gameState.cells];
        cellsCopy[index] = gameState.currentMove;
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: cellsCopy,
            currentMove: nextMove,
        }));
    }

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
                currentMove={gameState.currentMove}
                nextMove={nextMove}
            ></GameMoveInfo>
            <GameGrid
                cells={gameState.cells}
                onCellClick={onCellClickHandler}
            />
        </div>
    );
}

export default GameField;
