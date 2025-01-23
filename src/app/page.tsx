"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import GameTitle from "@/components/GameNew/GameTitle/GameTitle";
import GameInfo from "@/components/GameNew/GameInfo/GameInfo";
import GameField from "@/components/GameNew/GameField/GameField";
import { GAME_SYMBOL } from "@/constants";

function Home() {
    return (
        <div className={styles["app"]}>
            <Header />
            <main className={styles["app-content"]}>
                <GameTitle />
                <GameInfo
                    players={[
                        {
                            id: 1,
                            name: "Polozova",
                            rating: 230,
                            symbol: GAME_SYMBOL.TRIANGLE,
                            time: "00:08",
                            avatar: "/images/avatar.png",
                        },
                        {
                            id: 2,
                            name: "Alex",
                            rating: 220,
                            symbol: GAME_SYMBOL.ZERO,
                            time: "01:05",
                            avatar: "/images/avatar2.png",
                        },
                        {
                            id: 3,
                            name: "Soomi",
                            rating: 112233445566778899,
                            symbol: GAME_SYMBOL.CROSS,
                            time: "01:20",
                            avatar: "/images/avatar2.png",
                        },
                        {
                            id: 4,
                            name: "Lilyma Dacarad",
                            rating: 5220,
                            symbol: GAME_SYMBOL.SQUARE,
                            time: "00:51",
                            avatar: "/images/avatar.png",
                        },
                    ]}
                    className="container-margins"
                />
                <GameField />
            </main>
        </div>
    );
}

export default Home;
