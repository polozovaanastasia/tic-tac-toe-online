import Profile from "@/components/Profile/Profile";
import styles from "./PlayerInfo.module.css";
import { PlayerType } from "../GameInfo";

type PlayerInfoPropsType = PlayerType;

function PlayerInfo({
    id,
    name,
    rating,
    symbol,
    time,
    avatar,
}: PlayerInfoPropsType) {
    return (
        <div key={id} className={styles["player"]}>
            <Profile
                name={name}
                rating={rating}
                avatarSrc={avatar}
                symbol={symbol}
            />
            <span></span>
            <div className={styles["player__time"]}>{time}</div>
        </div>
    );
}

export default PlayerInfo;
