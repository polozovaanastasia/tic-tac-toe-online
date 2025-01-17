import GameField from "./GameField/GameField";
import UIButtons from "./../uikit/Button/UIButton";
import styles from "./GameNew.module.css";
import { SymbolType } from "@/types";
import ZeroIcon from "../Icons/ZeroIcon";
import CrossIcon from "../Icons/СrossIcon";

type GamePropsType = {
    currentStep: SymbolType;
};

function GameNew({ currentStep }: GamePropsType) {
    console.log(currentStep);
    return (
        <div className={styles["game"]}>
            <div className={styles["game__header"]}>
                <div className={styles["game__info"]}>
                    <div className={styles["info__title"]}>
                        Ход:
                        <ZeroIcon width={20} height={20} />
                    </div>
                    <div className={styles["info__subtitle"]}>
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
            <GameField />
        </div>
    );
}

export default GameNew;
