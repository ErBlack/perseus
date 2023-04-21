import {EchoAnimationTypes, KeyTypes} from "../consts";
import KeyConfigs from "../data/key-configs";

import {RemoveEchoActionType, PressKeyActionType} from "./actions";

import type {PressKeyAction, RemoveEchoAction} from "./actions";
import type {EchoState} from "./types";

// Used to generate unique animation IDs for the echo animations. The actual
// values are irrelevant as long as they are unique.
let _lastAnimationId = 0;

const initialEchoState = {
    echoes: [],
} as const;

type Action = PressKeyAction | RemoveEchoAction;

const echoReducer = function (
    state: EchoState = initialEchoState,
    action: Action,
): EchoState {
    switch (action.type) {
        case PressKeyActionType:
            const keyConfig = KeyConfigs[action.key];

            // Add in the echo animation if the user performs a math
            // operation.
            if (
                keyConfig.type === KeyTypes.VALUE ||
                keyConfig.type === KeyTypes.OPERATOR
            ) {
                return {
                    ...state,
                    echoes: [
                        ...state.echoes,
                        {
                            animationId: "" + _lastAnimationId++,
                            animationType: action.inPopover
                                ? EchoAnimationTypes.LONG_FADE_ONLY
                                : EchoAnimationTypes.FADE_ONLY,
                            borders: action.borders,
                            id: keyConfig.id,
                            initialBounds: action.initialBounds,
                        },
                    ],
                };
            }
            return state;

        case RemoveEchoActionType:
            const remainingEchoes = state.echoes.filter((echo) => {
                return echo.animationId !== action.animationId;
            });
            return {
                ...state,
                echoes: remainingEchoes,
            };

        default:
            return state;
    }
};

export default echoReducer;
