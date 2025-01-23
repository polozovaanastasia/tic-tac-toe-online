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
    playersCount: number;
    players: Array<PlayerType>;
    className: string;
};

function GameInfo({ playersCount, players, className }: GameInfoPropsType) {
    return (
        <div className={`${styles["game-info"]} ${styles[className]}`}>
            {players.slice(0, playersCount).map((player) => {
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
            })}
        </div>
    );
}

export default GameInfo;
