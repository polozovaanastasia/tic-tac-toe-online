import styles from "./GameLayout.module.css";

type GameLayoutPropsType = {
    backLink: React.ReactElement;
    title: React.ReactElement;
    subtitle: React.ReactElement;
    playerList: React.ReactNode;
};

export function GameLayout({
    backLink,
    title,
    subtitle,
    playerList,
}: GameLayoutPropsType) {
    return (
        <>
            <div className={styles["game-title"]}>
                {backLink}
                {title}
                {subtitle}
            </div>
            <div className={styles["game-info"]}>{playerList}</div>
        </>
    );
}
