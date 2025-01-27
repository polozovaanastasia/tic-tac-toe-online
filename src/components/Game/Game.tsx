import GameCell from "./GameCell/GameCell";
import GameInfo from "./GameInfo/GameInfo";
import styles from "./Game.module.css";
import useGameState from "@/hooks/useGameState";

function Game() {
    const {
        cells,
        currentStep,
        winnerSequence,
        isDraw,
        onCellClickHandler,
        restartGame,
    } = useGameState();
    return (
        <div className={styles.game}>
            <div className={styles.game__container}>
                <GameInfo
                    currentStep={currentStep}
                    winnerSequence={Boolean(winnerSequence)}
                    isDraw={isDraw}
                    restartGame={restartGame}
                />
                <div
                    className={`${styles["game-field"]} ${
                        winnerSequence || isDraw
                            ? styles["game_disabled"]
                            : styles["game_started"]
                    }`}
                >
                    {cells.map((cell, index) => {
                        const onClickHandler = () => {
                            onCellClickHandler(cell, index);
                        };

                        return (
                            <GameCell
                                key={index}
                                cell={cell}
                                winnerSequence={
                                    !!winnerSequence?.includes(index)
                                }
                                onClickHandler={onClickHandler}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Game;
