import { PLAYERS, PLAYERS_COUNT, SIZES } from "@/constants";
import { useReducer } from "react";
import UIButton from "../uikit/UIButton/UIButton";
import { computeWinnerSymbol } from "./Model/computeWinnerSymbol";
import {
    clickCellActionCreator,
    gameStateReducer,
    initialGameState,
} from "./Model/gameStateReducer";
import { getNextMove } from "./Model/getNextMove";
import { BackLink } from "./UI/BackLink/BackLink";
import { GameCell } from "./UI/GameCell/GameCell";
import { GameLayout } from "./UI/GameLayout/GameLayout";
import { GameMoveInfo } from "./UI/GameMoveInfo/GameMoveInfo";
import { GameOverModal } from "./UI/GameOverModal/GameOverModal";
import { GameSubtitle } from "./UI/GameSubtitle/GameSubtitle";
import { GameTitle } from "./UI/GameTitle/GameTitle";
import { PlayerInfo } from "./UI/PlayerInfo/PlayerInfo";

export function Game() {
    const [{ cells, currentMove, winnerSequence, playersTimeOver }, dispatch] =
        useReducer(gameStateReducer, initialGameState);

    const nextMove = getNextMove(currentMove, PLAYERS_COUNT, playersTimeOver);

    const players = PLAYERS.slice(0, PLAYERS_COUNT);

    const winnerSymbol = computeWinnerSymbol(
        cells,
        currentMove,
        nextMove,
        winnerSequence
    );

    const winnerPlayer = PLAYERS.find(
        (player) => player.symbol === winnerSymbol
    );
    return (
        <>
            <GameLayout
                backLink={<BackLink />}
                title={<GameTitle />}
                subtitle={
                    <GameSubtitle
                        playersCount={PLAYERS_COUNT}
                        isRatingGame
                        timeMode={"1 минута на ход"}
                    />
                }
                playerList={players.map((player) => (
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
                steps={
                    <GameMoveInfo
                        currentMove={currentMove}
                        nextMove={nextMove}
                    />
                }
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
                gameCells={cells.map((cell, i) => {
                    const isWinner =
                        winnerSequence && winnerSequence.includes(i);
                    function onClick() {
                        dispatch(clickCellActionCreator(i));
                    }
                    return (
                        <GameCell
                            key={i}
                            symbol={cell}
                            isWinner={isWinner}
                            onClick={onClick}
                        ></GameCell>
                    );
                })}
            />
            <GameOverModal
                winnerName={winnerPlayer?.name}
                players={players.map((player) => (
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
                onClose={() => {}}
            />
        </>
    );
}
