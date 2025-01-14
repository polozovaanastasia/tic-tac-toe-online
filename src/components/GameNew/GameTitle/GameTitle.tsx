import Link from "next/link";
import styles from "./GameTitle.module.css";
import ArrowLeftIcon from "@/components/Icons/ArrowLeftIcon";
import StarIcon from "@/components/Icons/StarIcon";
import UserIcon from "@/components/Icons/UserIcon";
import TimeIcon from "@/components/Icons/TimeIcon";
import Profile from "@/components/Profile/Profile";

function GameTitle() {
    const avatarSrc = "/images/avatar.png";
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
                    <UserIcon />2
                </span>
                <span className={styles["game-title__time"]}>
                    <TimeIcon />1 мин на ход
                </span>
            </div>
            <Profile
                name="Nastia"
                rating={230}
                avatarSrc={avatarSrc}
                label="X"
            />
        </div>
    );
}

export default GameTitle;
