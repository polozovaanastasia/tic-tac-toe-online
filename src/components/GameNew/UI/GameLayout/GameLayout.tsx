import styles from "./GameLayout.module.css";

type GameLayoutPropsType = {
    backLink: React.ReactElement;
    title: React.ReactElement;
    subtitle: React.ReactElement;
};

export function GameLayout({ backLink, title, subtitle }: GameLayoutPropsType) {
    return (
        <div className={styles["game-title"]}>
            {backLink}
            {title}
            {subtitle}
        </div>
    );
}
