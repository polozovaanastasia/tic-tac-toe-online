"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import GameTitle from "@/components/GameNew/GameTitle/GameTitle";
import GameInfo from "@/components/GameNew/GameInfo/GameInfo";
import GameField from "@/components/GameNew/GameField/GameField";
import { GAME_SYMBOL } from "@/constants";
import useGameState from "@/hooks/useGameState";

function Home() {
    const playersCount = 4;
    const {
        cells,
        currentMove,
        nextMove,
        winnerSequence,
        onCellClickHandler,
        onPlayersTimeOverHandler,
    } = useGameState(playersCount);
    return (
        <div className={styles["app"]}>
            <Header />
            <main className={styles["app-content"]}>
                <GameTitle playersCount={playersCount} />
                <GameInfo
                    currentMove={currentMove}
                    playersCount={playersCount}
                    players={[
                        {
                            id: 2,
                            name: "Alex",
                            rating: 220,
                            symbol: GAME_SYMBOL.ZERO,
                            time: 30,
                            avatar: "/images/avatar2.png",
                        },
                        {
                            id: 3,
                            name: "Soomi",
                            rating: 112233445566778899,
                            symbol: GAME_SYMBOL.CROSS,
                            time: 30,
                            avatar: "/images/avatar.png",
                        },
                        {
                            id: 1,
                            name: "Polozova",
                            rating: 230,
                            symbol: GAME_SYMBOL.TRIANGLE,
                            time: 30,
                            avatar: "/images/avatar.png",
                        },
                        {
                            id: 4,
                            name: "Viliam Dacarad",
                            rating: 5220,
                            symbol: GAME_SYMBOL.SQUARE,
                            time: 30,
                            avatar: "/images/avatar2.png",
                        },
                    ]}
                    isWinner={!!winnerSequence}
                    onPlayersTimeOverHandler={onPlayersTimeOverHandler}
                    className="container-margins"
                />
                <GameField
                    cells={cells}
                    currentMove={currentMove}
                    nextMove={nextMove}
                    winnerSequence={winnerSequence}
                    onCellClickHandler={onCellClickHandler}
                />
            </main>
        </div>
    );
}

export default Home;
