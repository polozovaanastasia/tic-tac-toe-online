import { SymbolValueType } from "@/types";
import styles from "./GameInfo.module.css";
import PlayerInfo from "./PlayerInfo/PlayerInfo";

export type PlayerType = {
    id: number;
    name: string;
    rating: number;
    symbol: SymbolValueType;
    time: string;
    avatar: string;
};

type GameInfoPropsType = {
    players: Array<PlayerType>;
    className: string;
};

function GameInfo({ players, className }: GameInfoPropsType) {
    return (
        <div className={`${styles["game-info"]} ${styles[className]}`}>
            {players.map((player) => {
                const { id, name, rating, symbol, time, avatar } = player;
                return (
                    <PlayerInfo
                        key={id}
                        id={id}
                        name={name}
                        rating={rating}
                        symbol={symbol}
                        time={time}
                        avatar={avatar}
                    />
                );
                // <div key={player.id} className={styles["game-info__section"]}>
                //     <Profile
                //         name={player.name}
                //         rating={player.rating}
                //         avatarSrc={avatarSrc}
                //         label={GAME_SYMBOL.CROSS}
                //     />
                //     <span></span>
                //     <div className={styles["game-info__time"]}>
                //         {player.time}
                //     </div>
                // </div>
            })}
        </div>
    );
}

export default GameInfo;
