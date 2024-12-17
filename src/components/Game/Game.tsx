import GameCell from "../GameCell/GameCell";
import GameInfo from "../GameInfo/GameInfo";
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
        <div className={styles.app}>
            <div className={styles.game}>
                <GameInfo
                    currentStep={currentStep}
                    isWinner={Boolean(winnerSequence)}
                    isDraw={isDraw}
                    restartGame={restartGame}
                />
                <div
                    className={`${styles["game-fild"]} ${
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
                                index={index}
                                currentStep={currentStep}
                                isWinner={!!winnerSequence?.includes(index)}
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
