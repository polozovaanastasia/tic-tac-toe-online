import Link from "next/link";
import styles from "./GameTitle.module.css";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import StarIcon from "@/components/Icons/StarIcon";
import UserIcon from "@/components/Icons/UserIcon";
import TimeIcon from "@/components/Icons/TimeIcon";

type GameTitlePropsType = {
    playersCount: number;
};

function GameTitle({ playersCount }: GameTitlePropsType) {
    return (
        <div className={styles["game-title"]}>
            <Link className={styles["game-title__link"]} href="#">
                <ArrowLeftIcon />
                На главную
            </Link>
            <h1 className={styles["game-title__title"]}>Крестики нолики</h1>
            <div className={styles["game-title__info"]}>
                <StarIcon />
                <span className={styles["game-title__player-count"]}>
                    <UserIcon />
                    {playersCount}
                </span>
                <span className={styles["game-title__time"]}>
                    <TimeIcon />1 мин на ход
                </span>
            </div>
        </div>
    );
}

export default GameTitle;
