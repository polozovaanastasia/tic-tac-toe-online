"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import GameTitle from "@/components/Game/GameTitle/GameTitle";
import GameInfo from "@/components/Game/GameInfo/GameInfo";
import GameField from "@/components/Game/GameField/GameField";
import { GAME_SYMBOL, SIZES } from "@/constants";
import useGameState from "@/hooks/useGameState";
import UIModal from "@/components/uikit/UIModal/UIModal";
import UIButton from "@/components/uikit/UIButton/UIButton";

function Home() {
    const playersCount = 2;
    const {
        cells,
        currentMove,
        nextMove,
        winnerSequence,
        onCellClickHandler,
        onPlayersTimeOverHandler,
    } = useGameState(playersCount);
    return (
        <HomeLayout header={<Header />}>
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
                        time: 30000,
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
            <UIModal
                // isOpen={!!winnerSequence}
                isOpen={true}
                onClose={() => console.log("Закрываю окно")}
            >
                {
                    <>
                        <UIModal.Header>{"Игра завершена!"}</UIModal.Header>
                        <UIModal.Body>{<div>{"Modal Body"}</div>}</UIModal.Body>
                        <UIModal.Footer>
                            <UIButton
                                variant="outline"
                                size={SIZES.MEDIUM}
                                onClick={() => {}}
                            >
                                {"Вернуться"}
                            </UIButton>
                            <UIButton
                                variant="primary"
                                size={SIZES.MEDIUM}
                                onClick={() => {}}
                            >
                                {"Играть снова"}
                            </UIButton>
                        </UIModal.Footer>
                    </>
                }
            </UIModal>
            <GameField
                cells={cells}
                currentMove={currentMove}
                nextMove={nextMove}
                winnerSequence={winnerSequence}
                onCellClickHandler={onCellClickHandler}
            />
            <div id="modals"></div>
        </HomeLayout>
    );
}

export default Home;

type HomeLayoutPropsType = {
    header: React.ReactNode;
    children: React.ReactNode;
};

function HomeLayout({ header, children }: HomeLayoutPropsType) {
    return (
        <div className={styles["app"]}>
            {header}
            <main className={styles["app-content"]}>{children}</main>
        </div>
    );
}
