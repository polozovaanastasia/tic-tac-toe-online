import styles from "./GameGrid.module.css";
import GameCell from "./GameCell/GameCell";
import ZeroIcon from "@/components/Icons/ZeroIcon";
import { CellType, SymbolValueType } from "@/types";

type GameGridPropsType = {
    cells: Array<CellType>;
    currentMove: SymbolValueType;
};

function GameGrid({ cells, currentMove }: GameGridPropsType) {
    return (
        <div className={styles["game-grid"]}>
            {cells.map((_, i) => {
                return (
                    <GameCell key={i} onClick={() => {}}>
                        {<ZeroIcon width={20} height={20} />}
                    </GameCell>
                );
            })}
        </div>
    );
}

export default GameGrid;
