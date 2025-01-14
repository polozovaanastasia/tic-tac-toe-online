import { SymbolType } from "@/types";
import styles from "./Profile.module.css";
import Image from "next/image";
import { SYMBOL_O, SYMBOL_X } from "@/constants";

type ProfilePropsType = {
    name: string;
    rating: number;
    avatarSrc: string;
    label?: SymbolType;
};

function Profile({ name, rating, avatarSrc, label }: ProfilePropsType) {
    const labelClassMap = {
        [SYMBOL_X]: styles["profile__label_x"],
        [SYMBOL_O]: styles["profile__label_o"],
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
