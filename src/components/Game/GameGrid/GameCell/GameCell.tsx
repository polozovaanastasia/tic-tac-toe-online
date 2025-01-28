// import ZeroIcon from "@/components/Icons/ZeroIcon";
import { JSX } from "react";
import styles from "./GameCell.module.css";
import classNames from "classnames";

type GameCellPropsType = {
    children: JSX.Element | null;
    isWinner: boolean;
    onClick: () => void;
};

function GameCell({ children, isWinner, onClick }: GameCellPropsType) {
    const GameCellClasses = classNames(
        styles["game-cell"],
        isWinner && styles["game-cell_winner"]
    );
    return (
        <button className={GameCellClasses} onClick={onClick}>
            {children}
        </button>
    );
}

export default GameCell;
