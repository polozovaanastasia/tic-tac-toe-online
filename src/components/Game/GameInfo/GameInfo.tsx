import { SymbolValueType } from "@/types";
import styles from "./GameInfo.module.css";
import PlayerInfo from "./PlayerInfo/PlayerInfo";

export type PlayerType = {
    id: number;
    name: string;
    rating: number;
    symbol: SymbolValueType;
    time: number;
    avatar: string;
};

type GameInfoPropsType = {
    currentMove: SymbolValueType;
    playersCount: number;
    players: Array<PlayerType>;
    isWinner: boolean;
    onPlayersTimeOverHandler: (symbol: SymbolValueType) => void;
    className: string;
};

function GameInfo({
    currentMove,
    playersCount,
    players,
    isWinner,
    onPlayersTimeOverHandler,
    className,
}: GameInfoPropsType) {
    return (
        <div className={`${styles["game-info"]} ${styles[className]}`}>
            {players.slice(0, playersCount).map((player) => {
                const { id, name, rating, symbol, time, avatar } = player;

                function onTimeOver() {
                    onPlayersTimeOverHandler(symbol);
                }
                return (
                    <PlayerInfo
                        key={id}
                        id={id}
                        name={name}
                        rating={rating}
                        symbol={symbol}
                        time={time}
                        avatar={avatar}
                        isTimerRunning={
                            !isWinner && currentMove === player.symbol
                        }
                        onTimeOver={onTimeOver}
                    />
                );
            })}
        </div>
    );
}

export default GameInfo;
