import styles from "./GameLayout.module.css";

type GameLayoutPropsType = {
    backLink: React.ReactElement;
    title: React.ReactElement;
    subtitle: React.ReactElement;
    playerList: React.ReactNode;
    steps: React.ReactNode;
    actions: React.ReactNode;
    gameCells: React.ReactNode;
};

export function GameLayout({
    backLink,
    title,
    subtitle,
    playerList,
    steps,
    actions,
    gameCells,
}: GameLayoutPropsType) {
    return (
        <>
            <div className={styles["game-title"]}>
                {backLink}
                {title}
                {subtitle}
            </div>
            <div className={styles["game-info"]}>{playerList}</div>
            <div className={styles["game-field"]}>
                <div className={styles["game-field__header"]}>
                    {steps}
                    {actions}
                </div>
                <div className={styles["game-grid"]}>{gameCells}</div>
            </div>
        </>
    );
}
