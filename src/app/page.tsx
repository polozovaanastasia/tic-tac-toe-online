"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import GameTitle from "@/components/GameNew/GameTitle/GameTitle";
import GamePlayers from "@/components/GameNew/GamePlayers/GamePlayers";
import GameNew from "@/components/GameNew/GameNew";

function Home() {
    return (
        <div className={styles["app"]}>
            <Header />
            <main className={styles["app-content"]}>
                <GameTitle />
                <GamePlayers
                    players={[
                        { id: 1, name: "Polozova", rating: 230, time: "00:08" },
                        { id: 2, name: "Alex", rating: 220, time: "01:05" },
                        {
                            id: 3,
                            name: "Soomi",
                            rating: 112233445566778899,
                            time: "01:20",
                        },
                        {
                            id: 4,
                            name: "Lilyma Dacarad",
                            rating: 5220,
                            time: "00:51",
                        },
                    ]}
                    className="container-margins"
                />
                <GameNew currentStep="X" />
            </main>
        </div>
    );
}

export default Home;
