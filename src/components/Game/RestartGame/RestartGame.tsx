import styles from "./RestartGame.module.css";

type RestartButtonPropsType = {
    onClick: () => void;
};

function RestartButton({ onClick }: RestartButtonPropsType) {
    return (
        <button className={styles["game-restart"]} onClick={onClick}>
            Restart
        </button>
    );
}

export default RestartButton;
