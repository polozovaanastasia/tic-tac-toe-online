import ZeroIcon from "@/components/Icons/ZeroIcon";
import styles from "./GameField.module.css";

const cells = new Array(19 * 19).fill(null);

function GameField() {
    return (
        <div className={styles["game__field"]}>
            {cells.map((_, i) => {
                return (
                    <button key={i} className={styles["game__cell"]}>
                        {/* {i + 1} */}
                        <ZeroIcon width={20} height={20} />
                    </button>
                );
            })}
        </div>
    );
}

export default GameField;
