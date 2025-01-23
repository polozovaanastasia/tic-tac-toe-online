import { GAME_SYMBOL, SIZES } from "@/constants";
import { SizesValueType, SymbolValueType } from "@/types";
import SquareIcon from "@/components/Icons/SquareIcon";
import TriangleIcon from "@/components/Icons/TriangleIcon";
import ZeroIcon from "@/components/Icons/ZeroIcon";
import CrossIcon from "@/components/Icons/СrossIcon";

type GameSymbolPropsType = {
    symbol: SymbolValueType;
    size?: SizesValueType;
};

function GameSymbol({ symbol, size = SIZES.SMALL }: GameSymbolPropsType) {
    const Icon = {
        [GAME_SYMBOL.ZERO]: ZeroIcon,
        [GAME_SYMBOL.CROSS]: CrossIcon,
        [GAME_SYMBOL.SQUARE]: SquareIcon,
        [GAME_SYMBOL.TRIANGLE]: TriangleIcon,
    }[symbol];
    const iconProps = size === SIZES.MEDIUM ? { width: 20, height: 20 } : {};

    return <Icon {...iconProps} />;
}

export default GameSymbol;
