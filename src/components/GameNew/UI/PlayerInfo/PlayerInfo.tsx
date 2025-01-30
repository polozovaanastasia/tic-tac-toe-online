import classNames from "classnames";
import styles from "./PlayerInfo.module.css";
import Image from "next/image";
import GameSymbol from "../GameSymbol/GameSymbol";
import { SymbolValueType } from "@/types";

type PlayerInfoPropsType = {
    name: string;
    rating: number;
    avatar: string;
    symbol: SymbolValueType;
    seconds: number;
    isTimerRunning: boolean;
};

export function PlayerInfo({
    name,
    rating,
    avatar,
    symbol,
    seconds,
    isTimerRunning,
}: PlayerInfoPropsType) {
    const isDanger = seconds <= 10;

    const playerTimeClasses = classNames(
        styles["player__time"],
        isTimerRunning && styles["player__time_active"],
        isDanger ? styles[`time_warning`] : ""
    );

    const minutesString = String(Math.trunc(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");

    return (
        <div className={styles["player-info"]}>
            <div className={styles["player"]}>
                <div className={styles["player__avatar"]}>
                    {symbol && (
                        <div className={`${styles["player__label"]}`}>
                            <GameSymbol symbol={symbol} />
                        </div>
                    )}
                    <Image
                        unoptimized
                        src={avatar}
                        alt="avatar"
                        width={48}
                        height={48}
                    />
                </div>
                <span className={styles["player__info"]}>
                    <span className={styles["player__info-name"]}>{name}</span>
                    <span className={styles["player__info-rating"]}>
                        Рейтинг: {rating}
                    </span>
                </span>
            </div>
            <span></span>
            <div className={playerTimeClasses}>
                {minutesString + ":" + secondsString}
            </div>
        </div>
    );
}
