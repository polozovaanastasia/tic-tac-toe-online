import styles from "./GameInfo.module.css";
import { SymbolType } from "../../../types/index";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SYMBOL_O, SYMBOL_X } from "@/constants";
import RestartButton from "../RestartGame/RestartGame";

type GameInfoPropsType = {
    currentStep: SymbolType;
    winnerSequence: boolean;
    isDraw: boolean;
    restartGame: () => void;
};

function GameInfo({
    currentStep,
    winnerSequence,
    isDraw,
    restartGame,
}: GameInfoPropsType) {
    const GameResultClassName = `${styles["game-result"]} ${
        winnerSequence
            ? currentStep === SYMBOL_X
                ? styles["game-result-winner_X"]
                : currentStep === SYMBOL_O
                ? styles["game-result-winner_O"]
                : ""
            : ""
    }`;

    if (winnerSequence || isDraw) {
        return (
            <div className={styles["game-info"]}>
                <div className={GameResultClassName}>
                    {winnerSequence ? (
                        <span>
                            <span className={styles["game-info-title"]}>
                                Победитель:
                            </span>
                            <GameSymbol symbol={currentStep} />
                        </span>
                    ) : (
                        <span>О, это ничья. Сыграем еще раз?</span>
                    )}

                    <RestartButton onClick={restartGame} />
                </div>
            </div>
        );
    }
    return (
        <div className={styles["game-info"]}>
            <div className={styles["game-step"]}>
                <span className={styles["game-info-title"]}> Ходит: </span>
                <GameSymbol symbol={currentStep} />
            </div>
        </div>
    );
}

export default GameInfo;
