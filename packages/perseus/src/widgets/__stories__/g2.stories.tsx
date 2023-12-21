import {View} from "@khanacademy/wonder-blocks-core";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import * as React from "react";

import G2 from "../g2/widget";

import type {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof G2> = {
    title: "Perseus/Widgets/G2",
    component: G2,
    decorators: [
        (Story) => (
            <View style={{margin: Spacing.medium_16}}>
                <Story />
            </View>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof G2>;

export const Primary: Story = {
    args: {},
};
