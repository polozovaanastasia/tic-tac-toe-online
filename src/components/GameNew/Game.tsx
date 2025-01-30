import { PLAYERS } from "@/constants";
import { BackLink } from "./UI/BackLink/BackLink";
import { GameLayout } from "./UI/GameLayout/GameLayout";
import { GameSubtitle } from "./UI/GameSubtitle/GameSubtitle";
import { GameTitle } from "./UI/GameTitle/GameTitle";
import { PlayerInfo } from "./UI/PlayerInfo/PlayerInfo";

export function Game() {
    return (
        <GameLayout
            backLink={<BackLink />}
            title={<GameTitle />}
            subtitle={
                <GameSubtitle
                    playersCount={4}
                    isRatingGame
                    timeMode={"1 минута на ход"}
                />
            }
            playerList={PLAYERS.map((player) => (
                <PlayerInfo
                    key={player.id}
                    name={player.name}
                    rating={player.rating}
                    symbol={player.symbol}
                    seconds={player.time}
                    avatar={player.avatar}
                />
            ))}
        />
    );
}
