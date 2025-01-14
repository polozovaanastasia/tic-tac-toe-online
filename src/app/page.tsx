"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import GameTitle from "@/components/GameNew/GameTitle/GameTitle";
import Game from "@/components/Game/Game";

function Home() {
    return (
        <div className={styles["app"]}>
            <Header />
            <main className={styles["app-content"]}>
                <GameTitle />
                <Game />
            </main>
        </div>
    );
}

export default Home;
