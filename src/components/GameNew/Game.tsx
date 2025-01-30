import { BackLink } from "./UI/BackLink/BackLink";
import { GameLayout } from "./UI/GameLayout/GameLayout";
import { GameSubtitle } from "./UI/GameSubtitle/GameSubtitle";
import { GameTitle } from "./UI/GameTitle/GameTitle";

export function Game() {
    return (
        <GameLayout
            backLink={<BackLink />}
            title={<GameTitle />}
            subtitle={
                <GameSubtitle
                    playersCount={4}
                    isRatingGame
                    timeMode={"1 минута на ход"}
                />
            }
        />
    );
}
