import styles from "./GameGrid.module.css";
import GameCell from "./GameCell/GameCell";
import { CellType } from "@/types";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SIZES } from "@/constants";

type GameGridPropsType = {
    cells: Array<CellType>;
    onCellClick: (i: number) => void;
};

function GameGrid({ cells, onCellClick }: GameGridPropsType) {
    return (
        <div className={styles["game-grid"]}>
            {cells.map((symbol, i) => {
                function onClick() {
                    onCellClick(i);
                }
                return (
                    <GameCell key={i} onClick={onClick}>
                        {symbol && (
                            <GameSymbol symbol={symbol} size={SIZES.MEDIUM} />
                        )}
                    </GameCell>
                );
            })}
        </div>
    );
}

export default GameGrid;
