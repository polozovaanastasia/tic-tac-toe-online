import ZeroIcon from "@/components/Icons/ZeroIcon";
import styles from "./GameGrid.module.css";

const cells = new Array(19 * 19).fill(null);

function GameGrid() {
    return (
        <div className={styles["game-grid"]}>
            {cells.map((_, i) => {
                return (
                    <button key={i} className={styles["game-cell"]}>
                        {/* {i + 1} */}
                        <ZeroIcon width={20} height={20} />
                    </button>
                );
            })}
        </div>
    );
}

export default GameGrid;
