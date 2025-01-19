import GameGrid from "../GameGrid/GameGrid";
import UIButtons from "../../uikit/Button/UIButton";
import styles from "./GameField.module.css";
import { CellType, SymbolValueType } from "@/types";
import GameMoveInfo from "./GameMoveInfo/GameMoveInfo";
import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "@/constants";

function GameField() {
    const [cells, setCells] = useState<Array<CellType>>(() =>
        new Array(19 * 19).fill(null)
    );
    const [currentMove, setCurrentMove] = useState<SymbolValueType>(
        GAME_SYMBOL.TRIANGLE
    );

    const nextMove = getNextMove();

    function getNextMove() {
        const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
        return MOVE_ORDER[nextMoveIndex] || MOVE_ORDER[0];
    }

    // function renderMoveIcons(symbol: SymbolValueType) {
    //     if (symbol === GAME_SYMBOL.ZERO) return <ZeroIcon />;
    //     if (symbol === GAME_SYMBOL.CROSS) return <CrossIcon />;
    //     if (symbol === GAME_SYMBOL.SQUARE) return <SquareIcon />;
    //     if (symbol === GAME_SYMBOL.TRIANGLE) return <TriangleIcon />;
    // }

    console.log(currentMove);

    const actions = (
        <>
            <UIButtons variant="primary" size="md" onClick={() => {}}>
                Ничья
            </UIButtons>
            <UIButtons variant="outline" size="md" onClick={() => {}}>
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
            <GameGrid cells={cells} currentMove={currentMove} />
        </div>
    );
}

export default GameField;
