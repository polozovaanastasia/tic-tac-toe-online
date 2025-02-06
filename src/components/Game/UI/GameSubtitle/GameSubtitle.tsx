import StarIcon from "../Icons/StarIcon";
import TimeIcon from "../Icons/TimeIcon";
import UserIcon from "../Icons/UserIcon";
import styles from "./GameSubtitle.module.css";

type GameSubtitlePropsType = {
    playersCount: number;
    isRatingGame: boolean;
    timeMode: string;
};

export function GameSubtitle({
    playersCount,
    isRatingGame,
    timeMode,
}: GameSubtitlePropsType) {
    return (
        <div className={styles["game-subtitle"]}>
            {isRatingGame && <StarIcon />}
            <span className={styles["game-subtitle__player-count"]}>
                <UserIcon />
                {playersCount}
            </span>
            <span className={styles["game-subtitle__time"]}>
                <TimeIcon /> {timeMode}
            </span>
        </div>
    );
}
