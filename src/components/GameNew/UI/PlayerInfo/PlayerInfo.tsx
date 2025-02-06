import { SymbolValueType } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import GameSymbol from "../GameSymbol/GameSymbol";
import styles from "./PlayerInfo.module.css";

type PlayerInfoPropsType = {
    name: string;
    rating: number;
    avatar: string;
    symbol: SymbolValueType;
    timer: number;
    timerStartAt?: number;
};

export function PlayerInfo({
    name,
    rating,
    avatar,
    symbol,
    timer,
    timerStartAt,
}: PlayerInfoPropsType) {
    const now = useNow(1000, !!timerStartAt);
    const mils = Math.max(
        now && timerStartAt ? timer - (now - timerStartAt) : timer,
        0
    );
    const seconds = Math.ceil(mils / 1000);

    const isDanger = seconds <= 10;

    const playerTimeClasses = classNames(
        styles["player__time"],
        timerStartAt && styles["player__time_active"],
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

function useNow(interval: number, enabled: boolean) {
    const [now, setNow] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (!enabled) {
            setNow(undefined);
            return;
        }
        const int = setInterval(() => {
            setNow(Date.now());
        }, interval);

        return () => {
            clearInterval(int);
        };
    }, [interval, enabled]);
    return now;
}
