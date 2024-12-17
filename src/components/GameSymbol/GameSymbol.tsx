import styles from "./GameSymbol.module.css";
import { CellType } from "../../types/index";
import { SYMBOL_O, SYMBOL_X } from "@/constants";

type GameSymbolPropsType = {
    symbol: CellType;
};

function GameSymbol({ symbol }: GameSymbolPropsType) {
    const getSymbolClassName = (symbol: CellType) => {
        if (symbol === SYMBOL_X) return styles["symbol-x"];
        if (symbol === SYMBOL_O) return styles["symbol-o"];
        return "";
    };
    return (
        <span className={`${styles["symbol"]} ${getSymbolClassName(symbol)}`}>
            {symbol}
        </span>
    );
}

export default GameSymbol;
