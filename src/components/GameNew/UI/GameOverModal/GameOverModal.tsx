import { SIZES } from "@/constants";
import UIButton from "../uikit/UIButton/UIButton";
import UIModal from "../uikit/UIModal/UIModal";

export function GameOverModal() {
    return (
        <UIModal
            // isOpen={!!winnerSequence}
            isOpen={true}
            onClose={() => console.log("Закрываю окно")}
        >
            {
                <>
                    <UIModal.Header>{"Игра завершена!"}</UIModal.Header>
                    <UIModal.Body>{<div>{"Modal Body"}</div>}</UIModal.Body>
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
