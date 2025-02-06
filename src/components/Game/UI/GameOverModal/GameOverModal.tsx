import { SIZES } from "@/constants";
import UIButton from "../../../uikit/UIButton/UIButton";
import UIModal from "../../../uikit/UIModal/UIModal";
import styles from "./GameOverModal.module.css";

type GameOverModalPropsType = {
    winnerName?: string;
    players: React.ReactNode;
    onClose: () => void;
};

export function GameOverModal({
    winnerName,
    players,
    onClose,
}: GameOverModalPropsType) {
    return (
        <UIModal isOpen={!!winnerName} onClose={onClose}>
            {
                <>
                    <UIModal.Header>{"Игра завершена!"}</UIModal.Header>
                    <UIModal.Body>
                        <div className={styles["winner-name"]}>
                            Победитель: <span>{winnerName}</span>
                        </div>
                        <div className={styles["players-info"]}>{players}</div>
                    </UIModal.Body>
                    <UIModal.Footer>
                        <UIButton
                            variant="outline"
                            size={SIZES.MEDIUM}
                            onClick={() => {}}
                        >
                            {"Вернуться"}
                        </UIButton>
                        <UIButton
                            variant="primary"
                            size={SIZES.MEDIUM}
                            onClick={() => {}}
                        >
                            {"Играть снова"}
                        </UIButton>
                    </UIModal.Footer>
                </>
            }
        </UIModal>
    );
}
