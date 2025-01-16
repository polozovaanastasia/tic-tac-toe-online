import styles from "./UIButton.module.css";
import classNames from "classnames";

type UIButtonVariantType = "primary" | "outline";

type UIButtonSizeType = "lg" | "md" | "sm";

type UIButtonPropsType = {
    text: string;
    variant: UIButtonVariantType;
    size: UIButtonSizeType;
    onClick: () => void;
};

function UIButton({ text, variant, size, onClick }: UIButtonPropsType) {
    const UIButtonClasses = classNames(
        styles["ui-button"],
        styles[`ui-button-${variant}`],
        styles[`ui-button-${size}`]
    );
    return (
        <button className={UIButtonClasses} onClick={onClick}>
            {text}
        </button>
    );
}

export default UIButton;
