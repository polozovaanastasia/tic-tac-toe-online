import styles from "./Button.module.css";
import classNames from "classnames";

type ButtonVariantType = "primary" | "outline";

type ButtonSizeType = "lg" | "md" | "sm";

type ButtonPropsType = {
    text: string;
    variant: ButtonVariantType;
    size: ButtonSizeType;
    onClick: () => void;
};

function Button({ text, variant, size, onClick }: ButtonPropsType) {
    const buttonClasses = classNames(
        styles.button,
        styles[`button-${variant}`],
        styles[`button-${size}`]
    );
    return (
        <button className={buttonClasses} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
