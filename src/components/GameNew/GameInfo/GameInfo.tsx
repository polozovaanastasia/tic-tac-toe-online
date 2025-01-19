import Profile from "@/components/Profile/Profile";
import styles from "./GameInfo.module.css";
import { GAME_SYMBOL } from "@/constants";

type PlayerType = {
    id: number;
    name: string;
    rating: number;
    time: string;
};

type GameInfoPropsType = {
    players: Array<PlayerType>;
    className: string;
};

function GameInfo({ players, className }: GameInfoPropsType) {
    const avatarSrc = "/images/avatar.png";
    return (
        <div className={`${styles["game-info"]} ${styles[className]}`}>
            {players.map((player) => (
                <div key={player.id} className={styles["game-info__section"]}>
                    <Profile
                        name={player.name}
                        rating={player.rating}
                        avatarSrc={avatarSrc}
                        label={GAME_SYMBOL.CROSS}
                    />
                    <span></span>
                    <div className={styles["game-info__time"]}>
                        {player.time}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GameInfo;
