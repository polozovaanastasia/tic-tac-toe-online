import { DEFAULT_TIMER, PLAYERS, PLAYERS_COUNT, SIZES } from "@/constants";
import { useCallback, useReducer } from "react";
import { useInterval } from "../lib/timers";
import UIButton from "../uikit/UIButton/UIButton";
import { computePlayerTimer } from "./Model/computePlayerTimer";
import { computeWinnerSymbol } from "./Model/computeWinnerSymbol";
import {
    clickCellActionCreator,
    gameReducer,
    initGameState,
    tickActionCreator,
} from "./Model/gameReducer";
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
    const [
        { cells, currentMove, currentMoveStart, winnerSequence, timers },
        dispatch,
    ] = useReducer(
        gameReducer,
        {
            playersCount: PLAYERS_COUNT,
            defaultTimer: DEFAULT_TIMER,
            currentMoveStart: Date.now(),
        },
        initGameState
    );

    const nextMove = getNextMove(currentMove, PLAYERS_COUNT, timers);

    const winnerSymbol = computeWinnerSymbol(
        cells,
        currentMove,
        nextMove,
        winnerSequence
    );

    useInterval(
        1000,
        !!currentMoveStart && !winnerSymbol,
        useCallback((now) => {
            dispatch(tickActionCreator(now));
        }, [])
    );

    const players = PLAYERS.slice(0, PLAYERS_COUNT);
    const winnerPlayer = PLAYERS.find(
        (player) => player.symbol === winnerSymbol
    );

    const onClickHandler = useCallback(function onClickHandler(i: number) {
        const now = Date.now();
        dispatch(clickCellActionCreator(i, now));
    }, []);

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
                playerList={players.map((player) => {
                    const { timer, timerStartAt } = computePlayerTimer(
                        player.symbol,
                        currentMove,
                        timers,
                        currentMoveStart
                    );
                    return (
                        <PlayerInfo
                            key={player.id}
                            name={player.name}
                            rating={player.rating}
                            symbol={player.symbol}
                            avatar={player.avatar}
                            timer={timer}
                            timerStartAt={
                                winnerSymbol ? undefined : timerStartAt
                            }
                        />
                    );
                })}
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
                    return (
                        <GameCell
                            key={i}
                            index={i}
                            symbol={cell}
                            isWinner={isWinner}
                            onClick={onClickHandler}
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
                        timer={timers[player.symbol] ?? DEFAULT_TIMER}
                        avatar={player.avatar}
                    />
                ))}
                onClose={() => {}}
            />
        </>
    );
}
