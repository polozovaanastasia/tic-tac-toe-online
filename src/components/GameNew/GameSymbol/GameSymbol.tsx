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
    const ICON_MAP = {
        [GAME_SYMBOL.ZERO]: ZeroIcon,
        [GAME_SYMBOL.CROSS]: CrossIcon,
        [GAME_SYMBOL.SQUARE]: SquareIcon,
        [GAME_SYMBOL.TRIANGLE]: TriangleIcon,
    };
    const IconComponent = ICON_MAP[symbol];
    const iconComponentProps =
        size === SIZES.MEDIUM ? { width: 20, height: 20 } : {};

    return <IconComponent {...iconComponentProps} />;
}

export default GameSymbol;
