import styles from "./GameGrid.module.css";
import GameCell from "./GameCell/GameCell";
import { CellType, winnerSequenceType } from "@/types";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SIZES } from "@/constants";

type GameGridPropsType = {
    cells: Array<CellType>;
    winnerSequence: winnerSequenceType;
    onCellClick: (i: number) => void;
};

function GameGrid({ cells, winnerSequence, onCellClick }: GameGridPropsType) {
    return (
        <div className={styles["game-grid"]}>
            {cells.map((symbol, i) => {
                function onClick() {
                    onCellClick(i);
                }
                return (
                    <GameCell
                        key={i}
                        isWinner={winnerSequence && winnerSequence.includes(i)}
                        onClick={onClick}
                    >
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
