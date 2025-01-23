import Profile from "@/components/Profile/Profile";
import styles from "./PlayerInfo.module.css";
import { PlayerType } from "../GameInfo";
import { useEffect, useState } from "react";
import classNames from "classnames";

type PlayerInfoPropsType = PlayerType & { isTimerRunning: boolean };

function PlayerInfo({
    id,
    name,
    rating,
    symbol,
    time,
    avatar,
    isTimerRunning,
}: PlayerInfoPropsType) {
    const [seconds, setSeconds] = useState<number>(time);

    const minutesString = String(Math.trunc(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");

    const playerTimeClasses = classNames(
        styles["player__time"],
        seconds <= 10 ? styles[`time_warning`] : ""
    );

    useEffect(() => {
        if (isTimerRunning) {
            const intervalId = setInterval(() => {
                setSeconds((s) => {
                    if (s <= 0) {
                        clearInterval(intervalId);
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
            // Cleanup: очищаем интервал при размонтировании компонента.
            return () => {
                clearInterval(intervalId);
                setSeconds(time); // Если хотим, чтобы time был не на всю игру, а на ход.
            };
        }
    }, [isTimerRunning, time]);

    return (
        <div key={id} className={styles["player"]}>
            <Profile
                name={name}
                rating={rating}
                avatarSrc={avatar}
                symbol={symbol}
            />
            <span></span>
            <div className={playerTimeClasses}>
                {minutesString + ":" + secondsString}
            </div>
        </div>
    );
}

export default PlayerInfo;
