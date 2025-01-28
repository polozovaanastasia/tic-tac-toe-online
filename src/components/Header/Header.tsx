import Image from "next/image";
import styles from "./Header.module.css";
import logoSrc from "../../../public/images/logo.svg";
import Profile from "../Profile/Profile";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import UIButton from "../uikit/UIButton/UIButton";
import { SIZES } from "@/constants";

function Header() {
    const avatarSrc = "/images/avatar.png";
    return (
        <header className={styles["header"]}>
            <Image
                className={styles["header__logo"]}
                src={logoSrc}
                alt="logo"
                width={163}
                height={53}
            />
            <UIButton variant="primary" size={SIZES.LARGE} onClick={() => {}}>
                Играть
            </UIButton>
            <button className={styles["header__player"]}>
                <Profile name="Polozova" rating={230} avatarSrc={avatarSrc} />
                <ArrowDownIcon />
            </button>
        </header>
    );
}

export default Header;
