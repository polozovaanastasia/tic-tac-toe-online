import styles from "./GameGrid.module.css";
import GameCell from "./GameCell/GameCell";
import { CellType, SymbolValueType } from "@/types";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SIZES } from "@/constants";

type GameGridPropsType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
    onCellClick: (cell: CellType, i: number) => void;
};

function GameGrid({ cells, currentMove, onCellClick }: GameGridPropsType) {
    return (
        <div className={styles["game-grid"]}>
            {cells.map((cell, i) => {
                function onClick() {
                    onCellClick(currentMove, i);
                }
                return (
                    <GameCell key={i} onClick={onClick}>
                        {cell && (
                            <GameSymbol symbol={cell} size={SIZES.MEDIUM} />
                        )}
                    </GameCell>
                );
            })}
        </div>
    );
}

export default GameGrid;
