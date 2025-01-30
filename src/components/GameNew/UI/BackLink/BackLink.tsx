import ArrowLeftIcon from "../Icons/ArrowLeftIcon";
import Link from "next/link";
import styles from "./BackLink.module.css";

export function BackLink() {
    return (
        <Link className={styles["game-title__link"]} href="#">
            <ArrowLeftIcon />
            На главную
        </Link>
    );
}
