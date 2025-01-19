// import ZeroIcon from "@/components/Icons/ZeroIcon";
import { JSX } from "react";
import styles from "./GameCell.module.css";

type GameCellPropsType = {
    children: JSX.Element;
    onClick: () => void;
};

function GameCell({ children, onClick }: GameCellPropsType) {
    return (
        <button className={styles["game-cell"]} onClick={onClick}>
            {children}
        </button>
    );
}

export default GameCell;
