import styles from "./UIButton.module.css";
import classNames from "classnames";

type UIButtonVariantType = "primary" | "outline";

type UIButtonSizeType = "lg" | "md" | "sm";

type UIButtonPropsType = {
    children: React.ReactNode;
    variant: UIButtonVariantType;
    size: UIButtonSizeType;
    onClick: () => void;
    className?: string;
};

function UIButton({
    children,
    variant,
    size,
    onClick,
    className = "",
}: UIButtonPropsType) {
    const UIButtonClasses = classNames(
        styles["ui-button"],
        styles[`ui-button-${variant}`],
        styles[`ui-button-${size}`],
        styles[className]
    );
    return (
        <button className={UIButtonClasses} onClick={onClick}>
            {children}
        </button>
    );
}

export default UIButton;
