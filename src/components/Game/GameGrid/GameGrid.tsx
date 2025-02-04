import { SIZES } from "@/constants";
import { CellType, WinnerSequenceType } from "@/types";
import GameSymbol from "../GameSymbol/GameSymbol";
import GameCell from "./GameCell/GameCell";
import styles from "./GameGrid.module.css";

type GameGridPropsType = {
    cells: Array<CellType>;
    winnerSequence: WinnerSequenceType;
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
