import { SymbolValueType } from "@/types";
import styles from "./Profile.module.css";
import Image from "next/image";
import { GAME_SYMBOL } from "@/constants";

type ProfilePropsType = {
    name: string;
    rating: number;
    avatarSrc: string;
    label?: SymbolValueType;
};

function Profile({ name, rating, avatarSrc, label }: ProfilePropsType) {
    const labelClassMap = {
        [GAME_SYMBOL.CROSS]: styles["profile__label_x"],
        [GAME_SYMBOL.ZERO]: styles["profile__label_o"],
        [GAME_SYMBOL.SQUARE]: styles["profile__label_s"],
        [GAME_SYMBOL.TRIANGLE]: styles["profile__label_t"],
    };
    return (
        <div className={styles["profile__player"]}>
            <div className={styles["profile__avatar"]}>
                {label && (
                    <div
                        className={`${styles["profile__label"]} ${labelClassMap[label]}`}
                    ></div>
                )}
                <Image
                    unoptimized
                    src={avatarSrc}
                    alt="avatar"
                    width={48}
                    height={48}
                />
            </div>
            <span className={styles["profile__player-info"]}>
                <span className={styles["profile__player-info-name"]}>
                    {name}
                </span>
                <span className={styles["profile__player-info-rating"]}>
                    Рейтинг: {rating}
                </span>
            </span>
        </div>
    );
}

export default Profile;
