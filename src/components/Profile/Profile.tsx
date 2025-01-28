import { SymbolValueType } from "@/types";
import styles from "./Profile.module.css";
import Image from "next/image";
import GameSymbol from "../Game/GameSymbol/GameSymbol";

type ProfilePropsType = {
    name: string;
    rating: number;
    avatarSrc: string;
    symbol?: SymbolValueType;
};

function Profile({ name, rating, avatarSrc, symbol }: ProfilePropsType) {
    return (
        <div className={styles["profile__player"]}>
            <div className={styles["profile__avatar"]}>
                {symbol && (
                    <div className={`${styles["profile__label"]}`}>
                        <GameSymbol symbol={symbol} />
                    </div>
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
