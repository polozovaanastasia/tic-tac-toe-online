import { SizesValueType } from "@/types";
import styles from "./UIModal.module.css";
import classNames from "classnames";
import { SIZES } from "@/constants";
import CloseIcon from "@/components/Icons/CloseIcon";
import { createPortal } from "react-dom";

type ModalSizesValueType = SizesValueType | "full";

type UIModalPropsType = {
    size?: ModalSizesValueType;
    isOpen: boolean;
    onClose: () => void;
    children: string | React.ReactElement | Array<React.ReactElement>;
    className?: string;
};

type UIModalContentPropsType = {
    children: string | React.ReactElement | Array<React.ReactElement>;
    className?: string;
};

type UIModalHeaderPropsType = UIModalContentPropsType;
type UIModalBodyPropsType = UIModalContentPropsType;
type UIModalFooterPropsType = UIModalContentPropsType;

function UIModal({
    size = SIZES.MEDIUM,
    isOpen = false,
    onClose,
    children,
    className,
}: UIModalPropsType) {
    if (!isOpen) {
        return null;
    }

    const UIModalClasses = classNames(
        styles["ui-modal"],
        styles[`ui-modal-${size}`],
        className
    );

    function onCloseHandler(e: React.MouseEvent) {
        if (e.target instanceof HTMLElement) {
            const inModal = e.target.closest('[data-id="modal"]');
            if (!inModal) {
                onClose();
            }
        }
    }
    const modal = (
        <div className={styles["ui-modal__overlay"]} onClick={onCloseHandler}>
            <div data-id="modal" className={UIModalClasses}>
                <button
                    className={styles["ui-modal__button-close"]}
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>
                {children}
            </div>
        </div>
    );

    const modalsRoot = document.getElementById("modals");
    if (!modalsRoot) return null;

    return createPortal(modal, modalsRoot);
}

UIModal.Header = function UIModalHeader({
    children,
    className,
}: UIModalHeaderPropsType) {
    const UIModalHeaderClasses = classNames(
        styles["ui-modal__header"],
        className
    );
    return <div className={UIModalHeaderClasses}>{children}</div>;
};

UIModal.Body = function UIModalBody({
    children,
    className,
}: UIModalBodyPropsType) {
    const UIModalBodyClasses = classNames(styles["ui-modal__body"], className);
    return <div className={UIModalBodyClasses}>{children}</div>;
};

UIModal.Footer = function UIModalFooter({
    children,
    className,
}: UIModalFooterPropsType) {
    const UIModalFooterClasses = classNames(
        styles["ui-modal__footer"],
        className
    );
    return <div className={UIModalFooterClasses}>{children}</div>;
};

export default UIModal;
