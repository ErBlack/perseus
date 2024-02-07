export const KeyArray = [
    "PLUS",
    "MINUS",
    "NEGATIVE",
    "TIMES",
    "DIVIDE",
    "DECIMAL",
    "PERIOD",
    "PERCENT",
    "CDOT",
    "EQUAL",
    "NEQ",
    "GT",
    "LT",
    "GEQ",
    "LEQ", // mobile native only
    "FRAC_INCLUSIVE", // mobile native only
    "FRAC_EXCLUSIVE", // mobile native only
    "FRAC",
    "EXP",
    "EXP_2",
    "EXP_3",
    "SQRT",
    "CUBE_ROOT",
    "RADICAL",
    "LEFT_PAREN",
    "RIGHT_PAREN",
    "LN",
    "LOG",
    "LOG_N",
    "SIN",
    "COS", // TODO(charlie): Add in additional Greek letters.,
    "TAN",
    "PI",
    "THETA",
    "UP",
    "RIGHT",
    "DOWN",
    "LEFT",
    "BACKSPACE",
    "DISMISS",
    "JUMP_OUT_PARENTHESES",
    "JUMP_OUT_EXPONENT",
    "JUMP_OUT_BASE",
    "JUMP_INTO_NUMERATOR",
    "JUMP_OUT_NUMERATOR",
    "JUMP_OUT_DENOMINATOR", // Multi-functional keys.
    "NOOP", // mobile native only
    "MANY", // A custom key that captures an arbitrary number of symbols but has no 'default' symbol or action.
    "NUM_0",
    "NUM_1",
    "NUM_2",
    "NUM_3",
    "NUM_4",
    "NUM_5",
    "NUM_6",
    "NUM_7",
    "NUM_8",
    "NUM_9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

    // Currently only used by
    // Perseus' Expression MathInput
    "PHI",
    "NTHROOT3",
    "POW",
    "LOG_B",
] as const;

type Key = (typeof KeyArray)[number];

export default Key;
