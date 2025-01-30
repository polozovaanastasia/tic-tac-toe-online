import { PLAYERS, SIZES } from "@/constants";
import { BackLink } from "./UI/BackLink/BackLink";
import { GameLayout } from "./UI/GameLayout/GameLayout";
import { GameSubtitle } from "./UI/GameSubtitle/GameSubtitle";
import { GameTitle } from "./UI/GameTitle/GameTitle";
import { PlayerInfo } from "./UI/PlayerInfo/PlayerInfo";
import { GameMoveInfo } from "./UI/GameMoveInfo/GameMoveInfo";
import UIButton from "../uikit/UIButton/UIButton";
import { GameCell } from "./UI/GameCell/GameCell";

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
                    isTimerRunning={false}
                />
            ))}
            steps={<GameMoveInfo currentMove="cross" nextMove="zero" />}
            actions={
                <>
                    <UIButton
                        variant="primary"
                        size={SIZES.MEDIUM}
                        onClick={() => {}}
                    >
                        Ничья
                    </UIButton>
                    <UIButton
                        variant="outline"
                        size={SIZES.MEDIUM}
                        onClick={() => {}}
                    >
                        Сдаться
                    </UIButton>
                </>
            }
            gameCells={new Array(19 * 19).fill(null).map((symbol, i) => (
                <GameCell
                    key={i}
                    symbol={symbol}
                    isWinner={false}
                    onClick={() => {}}
                ></GameCell>
            ))}
        />
    );
}
