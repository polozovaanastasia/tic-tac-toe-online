import GameGrid from "../GameGrid/GameGrid";
import UIButtons from "../../uikit/Button/UIButton";
import styles from "./GameField.module.css";
import { SymbolType } from "@/types";
import ZeroIcon from "../../Icons/ZeroIcon";
import CrossIcon from "../../Icons/СrossIcon";

type GamePropsType = {
    currentStep: SymbolType;
};

function GameField({ currentStep }: GamePropsType) {
    console.log(currentStep);
    return (
        <div className={styles["game-field"]}>
            <div className={styles["game-field__header"]}>
                <div className={styles["game-field__header-info"]}>
                    <div className={styles["header-info__title"]}>
                        Ход:
                        <ZeroIcon width={20} height={20} />
                    </div>
                    <div className={styles["header-info__subtitle"]}>
                        Следующий:
                        <CrossIcon />
                    </div>
                </div>
                <UIButtons variant="primary" size="md" onClick={() => {}}>
                    Ничья
                </UIButtons>
                <UIButtons variant="outline" size="md" onClick={() => {}}>
                    Сдаться
                </UIButtons>
            </div>
            <GameGrid />
        </div>
    );
}

export default GameField;
