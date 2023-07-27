import {mount} from "@cypress/react";
import * as React from "react";

import Keypad from "../packages/math-input/src/components/keypad";

const renderSingleKeypad = (handleClickKey) =>
    mount(
        <Keypad
            extraKeys={["a", "b", "c", "PI"]}
            onClickKey={handleClickKey}
            advancedRelations
            basicRelations
            divisionKey
            logarithms
            multiplicationDot
            preAlgebra
            trigonometry
            onAnalyticsEvent={async () => {
                /* no-op */
            }}
        />,
    );
export default renderSingleKeypad;
