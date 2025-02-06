"use client";
import { Game } from "@/components/Game/Game";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

function Home() {
    return (
        <HomeLayout header={<Header />}>
            <Game />
            <div id="modals"></div>
        </HomeLayout>
    );
}

export default Home;

type HomeLayoutPropsType = {
    header: React.ReactElement;
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
