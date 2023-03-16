/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
// @flow
import {linterContextDefault} from "@khanacademy/perseus-linter";
import * as i18n from "@khanacademy/wonder-blocks-i18n";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {StyleSheet} from "aphrodite";
import * as React from "react";
import _ from "underscore";

import InputWithExamples from "../components/input-with-examples.jsx";
import SimpleKeypadInput from "../components/simple-keypad-input.jsx";
import {ApiOptions} from "../perseus-api.jsx";
import TexWrangler from "../tex-wrangler.js";
import KhanAnswerTypes from "../util/answer-types.js";

import NumericInput, {
    type RenderProps as NumericInputRenderProps,
} from "./numeric-input.jsx";

import type {
    PerseusNumericInputWidgetOptions,
    InputNumberWidget,
    NumericInputWidget,
    PerseusInputNumberWidgetOptions,
} from "../perseus-types";
import type {
    APIOptions,
    Path,
    PerseusScore,
    WidgetExports,
    WidgetProps,
} from "../types.js";

const ParseTex = TexWrangler.parseTex;

const answerTypes = {
    number: {
        name: "Numbers",
        forms: "integer, decimal, proper, improper, mixed",
    },
    decimal: {
        name: "Decimals",
        forms: "decimal",
    },
    integer: {
        name: "Integers",
        forms: "integer",
    },
    rational: {
        name: "Fractions and mixed numbers",
        forms: "integer, proper, improper, mixed",
    },
    improper: {
        name: "Improper numbers (no mixed)",
        forms: "integer, proper, improper",
    },
    mixed: {
        name: "Mixed numbers (no improper)",
        forms: "integer, proper, mixed",
    },
    percent: {
        name: "Numbers or percents",
        forms: "integer, decimal, proper, improper, mixed, percent",
    },
    pi: {
        name: "Numbers with pi",
        forms: "pi",
    },
};

const formExamples = {
    integer: function (options) {
        return i18n._("an integer, like $6$");
    },
    proper: function (options) {
        if (options.simplify === "optional") {
            return i18n._("a *proper* fraction, like $1/2$ or $6/10$");
        }
        return i18n._("a *simplified proper* fraction, like $3/5$");
    },
    improper: function (options) {
        if (options.simplify === "optional") {
            return i18n._("an *improper* fraction, like $10/7$ or $14/8$");
        }
        return i18n._("a *simplified improper* fraction, like $7/4$");
    },
    mixed: function (options) {
        return i18n._("a mixed number, like $1\\ 3/4$");
    },
    decimal: function (options) {
        return i18n._("an *exact* decimal, like $0.75$");
    },
    percent: function (options) {
        return i18n._("a percent, like $12.34\\%$");
    },
    pi: function (options) {
        return i18n._(
            "a multiple of pi, like $12\\ \\text{pi}$ or " +
                "$2/3\\ \\text{pi}$",
        );
    },
};

type UserInput = {|currentValue: string|};
type RenderProps = {|
    simplify: PerseusInputNumberWidgetOptions["simplify"],
    size: PerseusInputNumberWidgetOptions["size"],
    answerType: PerseusInputNumberWidgetOptions["answerType"],
    rightAlign: PerseusInputNumberWidgetOptions["rightAlign"],
|};
type Rubric = PerseusInputNumberWidgetOptions;
type ExternalProps = WidgetProps<RenderProps, Rubric>;
type Props = {|
    ...ExternalProps,
    apiOptions: $NonMaybeType<ExternalProps["apiOptions"]>,
    linterContext: $NonMaybeType<ExternalProps["linterContext"]>,
    rightAlign: $NonMaybeType<ExternalProps["rightAlign"]>,
    size: $NonMaybeType<ExternalProps["size"]>,
    currentValue: string,
    // NOTE(kevinb): This was the only default prop that is listed as
    // not-required in PerseusInputNumberWidgetOptions.
    answerType: $NonMaybeType<Rubric["answerType"]>,
|};

type DefaultProps = {|
    answerType: Props["answerType"],
    apiOptions: Props["apiOptions"],
    currentValue: Props["currentValue"],
    linterContext: Props["linterContext"],
    rightAlign: Props["rightAlign"],
    size: Props["size"],
|};

class InputNumber extends React.Component<Props> {
    static defaultProps: DefaultProps = {
        currentValue: "",
        size: "normal",
        answerType: "number",
        rightAlign: false,
        // NOTE(kevinb): renderer.jsx should be provide this so we probably don't
        // need to include it in defaultProps.
        apiOptions: ApiOptions.defaults,
        linterContext: linterContextDefault,
    };

    shouldShowExamples: () => boolean = () => {
        return this.props.answerType !== "number";
    };

    render(): React.Node {
        if (this.props.apiOptions.customKeypad) {
            // TODO(charlie): Support "Review Mode".
            const input = (
                <SimpleKeypadInput
                    // eslint-disable-next-line react/no-string-refs
                    ref="input"
                    value={this.props.currentValue}
                    keypadElement={this.props.keypadElement}
                    onChange={this.handleChange}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                />
            );

            if (this.props.rightAlign) {
                return <div className="perseus-input-right-align">{input}</div>;
            }

            return input;
        }
        // HACK(johnsullivan): Create a function with shared logic between
        // this and NumericInput.
        // TODO(jeremy): Deprecate this widget and prefer numeric-input.
        const rubric = this.props.reviewModeRubric;

        // Note: This is _very_ similar to what `numeric-input.jsx` does. If
        // you modify this, double-check if you also need to modify that
        // component.
        const inputStyles = [
            styles.default,
            this.props.size === "small" ? styles.small : null,
            this.props.rightAlign ? styles.rightAlign : styles.leftAlign,
        ];
        // Unanswered
        if (rubric && !this.props.currentValue) {
            inputStyles.push(styles.answerStateUnanswered);
        }

        return (
            <InputWithExamples
                // eslint-disable-next-line react/no-string-refs
                ref="input"
                value={this.props.currentValue}
                onChange={this.handleChange}
                style={inputStyles}
                type="text"
                examples={this.examples()}
                shouldShowExamples={this.shouldShowExamples()}
                onFocus={this._handleFocus}
                onBlur={this._handleBlur}
                id={this.props.widgetId}
                disabled={this.props.apiOptions.readOnly}
                linterContext={this.props.linterContext}
            />
        );
    }

    handleChange: (string, () => void) => void = (newValue, cb) => {
        this.props.onChange({currentValue: newValue}, cb);
    };

    _handleFocus: () => void = () => {
        this.props.onFocus([]);
        // HACK(kevinb): We want to dismiss the feedback popover that webapp
        // displays as soon as a user clicks in in the input field so we call
        // interactionCallback directly.
        const {interactionCallback} = this.props.apiOptions;
        if (interactionCallback) {
            interactionCallback();
        }
    };

    _handleBlur: () => void = () => {
        this.props.onBlur([]);
    };

    focus: () => boolean = () => {
        // eslint-disable-next-line react/no-string-refs
        this.refs.input.focus();
        return true;
    };

    focusInputPath: (Path) => void = (inputPath) => {
        // eslint-disable-next-line react/no-string-refs
        this.refs.input.focus();
    };

    blurInputPath: (Path) => void = (inputPath) => {
        // eslint-disable-next-line react/no-string-refs
        this.refs.input.blur();
    };

    getInputPaths: () => $ReadOnlyArray<Path> = () => {
        // The widget itself is an input, so we return a single empty list to
        // indicate this.
        /* c8 ignore next */
        return [[]];
    };

    // Note: We believe that this isn't used anywhere but are leaving it during
    // the initial refactor
    getGrammarTypeForPath: (Path) => string = (path) => {
        /* c8 ignore next */
        return "number";
    };

    setInputValue: (Path, string, () => void) => void = (
        path,
        newValue,
        cb,
    ) => {
        this.props.onChange(
            {
                currentValue: newValue,
            },
            cb,
        );
    };

    getUserInput: () => UserInput = () => {
        return InputNumber.getUserInputFromProps(this.props);
    };

    simpleValidate: (
        rubric: Rubric,
        onInputError?: APIOptions["onInputError"],
    ) => PerseusScore = (rubric, onInputError) => {
        onInputError = onInputError || function () {};
        return InputNumber.validate(this.getUserInput(), rubric, onInputError);
    };

    examples: () => $ReadOnlyArray<string> = () => {
        const type = this.props.answerType;
        const forms = answerTypes[type].forms.split(/\s*,\s*/);

        const examples = _.map(
            forms,
            function (form) {
                // eslint-disable-next-line @babel/no-invalid-this
                return formExamples[form](this.props);
            },
            this,
        );

        return [i18n._("**Your answer should be** ")].concat(examples);
    };

    static validate(
        state: {|currentValue: string|},
        rubric: Rubric,
        onInputError: APIOptions["onInputError"] = () => {},
    ): PerseusScore {
        if (rubric.answerType == null) {
            rubric.answerType = "number";
        }

        // note(matthewc): this will get immediately parsed again by
        // `KhanAnswerTypes.number.convertToPredicate`, but a string is
        // expected here
        const stringValue = `${rubric.value}`;
        const val = KhanAnswerTypes.number.createValidatorFunctional(
            stringValue,
            {
                simplify: rubric.simplify,
                inexact: rubric.inexact || undefined,
                maxError: rubric.maxError,
                forms: answerTypes[rubric.answerType].forms,
            },
        );

        // We may have received TeX; try to parse it before grading.
        // If `currentValue` is not TeX, this should be a no-op.
        const currentValue = ParseTex(state.currentValue);

        const result = val(currentValue);

        // TODO(eater): Seems silly to translate result to this invalid/points
        // thing and immediately translate it back in ItemRenderer.scoreInput()
        if (result.empty) {
            // TODO(FEI-3867): remove null-check once we have APIOptionsInternal
            const apiResult = onInputError?.(
                null, // reserved for some widget identifier
                state.currentValue,
                result.message,
            );
            return {
                type: "invalid",
                message: apiResult === false ? null : result.message,
            };
        }
        return {
            type: "points",
            earned: result.correct ? 1 : 0,
            total: 1,
            message: result.message,
        };
    }

    static getUserInputFromProps(props: Props): {|currentValue: string|} {
        return {
            currentValue: props.currentValue,
        };
    }

    static getOneCorrectAnswerFromRubric(rubric: $FlowFixMe): ?string {
        if (rubric.value == null) {
            return;
        }
        let answerString = String(rubric.value);
        if (rubric.inexact && rubric.maxError) {
            answerString += " \u00B1 " + rubric.maxError;
        }
        return answerString;
    }
}

const styles = StyleSheet.create({
    default: {
        width: 80,
        height: "auto",
    },
    small: {
        width: 40,
    },
    leftAlign: {
        paddingLeft: Spacing.xxxSmall_4,
        paddingRight: 0,
    },
    rightAlign: {
        textAlign: "right",
        paddingLeft: 0,
        paddingRight: Spacing.xxxSmall_4,
    },
    answerStateUnanswered: {
        backgroundColor: "#eee",
        border: "solid 1px #999",
    },
});

const propTransform = (
    widgetOptions: PerseusInputNumberWidgetOptions,
): RenderProps => {
    const {simplify, size, answerType, rightAlign} = widgetOptions;
    return {
        simplify,
        size,
        answerType,
        rightAlign,
    };
};

/* Ideally the return type here would be
 * `$Call<$NonMaybeType<typeofNumericInput.transform>>`
 * but the `transform` type on WidgetProps returns `any` so it is not usable
 * here right now */
// const inputNumberToNumericInputPropTransform = (
//     widgetOptions: PerseusInputNumberWidgetOptions,
// ): NumericInputRenderProps => {
//     return {};
// };

const mapAnswerTypeToMathFormat = (
    answerType: PerseusInputNumberWidgetOptions["answerType"],
): PerseusNumericInputWidgetOptions["answers"][0]["answerForms"] => {
    // These follow what's from `answerTypes` above
    switch (answerType) {
        case "number":
            return ["integer", "decimal", "proper", "improper", "mixed"];
        case "decimal":
            return ["decimal"];
        case "integer":
            return ["integer"];
        case "rational":
            return ["integer", "proper", "improper", "mixed"];
        case "improper":
            return ["integer", "proper", "improper"];
        case "mixed":
            return ["integer", "proper", "mixed"];
        case "percent":
            return [
                "integer",
                "decimal",
                "proper",
                "improper",
                "mixed",
                "percent",
            ];
        case "pi":
            return ["pi"];
    }
};

const inputNumberToNumericInputPropUpgrades = {
    "1": (
        v0props: ?PerseusInputNumberWidgetOptions,
    ): PerseusNumericInputWidgetOptions => {
        const options = {
            answers: [
                {
                    // input-number never had any sort of message like this
                    message: "",
                    // STOPSHIP: verify this isn't "lossy" in transition
                    value: parseFloat(v0props?.value ?? 0),
                    status: "correct",
                    answerForms: mapAnswerTypeToMathFormat(v0props?.answerType),
                    strict: false,
                    maxError: 0,
                    simplify: v0props?.simplify,
                },
            ],
            // input-number never had a property to explain the input. It
            // seems the its relatively common for numeric-inputs to not
            // have a labelText either (152 as of Mar 16, 2023).
            labelText: "",
            size: v0props?.size ?? "normal",
            // input-number never supports a coefficient answer style
            coefficient: false,
            multipleNumberInput: false,
            rightAlign: v0props?.rightAlign,
            static: false,

            // The option notes on this key say it's unused except for
            // examples (which is a feature we suspect is completely
            // unused). I'm making it undefined for now.
            answerForms: undefined,
        };

        return options;
    },
};

// export default ({
//     name: "input-number",
//     displayName: "Number text box (old)",
//     defaultAlignment: "inline-block",
//     hidden: true,
//     widget: InputNumber,
//     transform: propTransform,
//     isLintable: true,
// }: WidgetExports<typeof InputNumber>);

export default ({
    name: "input-number",
    displayName: "Deprecated alias for numeric-input - a Number text box",
    defaultAlignment: NumericInput.defaultAlignment,
    widget: NumericInput.widget,
    // This propUpgrades function is special because it migrates `input-number`
    // usages to `numeric-input` usages. This allows us to delete the
    // `input-number` widget but keep using all of the old content that
    // references the `input-number`.
    // We prefer `propUpgrades` over `transform` because `transform` doesn't
    // affect the rubric used to mark the guess and that would mean we are
    // passing `input-number` options to the `numeric-input`'s `validate()`
    // function and that wouldn't work!
    propUpgrades: inputNumberToNumericInputPropUpgrades,
    isLintable: true,
    version: {major: 1, minor: 0},
}: WidgetExports<typeof NumericInput.widget>);
