import Profile from "@/components/Profile/Profile";
import styles from "./GamePlayers.module.css";

type PlayerType = {
    id: number;
    name: string;
    rating: number;
    time: string;
};

type GamePlayersPropsType = {
    players: Array<PlayerType>;
};

function GamePlayers({ players }: GamePlayersPropsType) {
    const avatarSrc = "/images/avatar.png";
    return (
        <div className={styles["game-players"]}>
            {players.map((player) => (
                <div key={player.id} className={styles["game-player"]}>
                    <Profile
                        name={player.name}
                        rating={player.rating}
                        avatarSrc={avatarSrc}
                        label="X"
                    />
                    <span></span>
                    <div className={styles["game-player__time"]}>
                        {player.time}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GamePlayers;
