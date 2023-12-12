import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
// import more from "highcharts/highcharts-more";
import HighchartsDraggableModule from "highcharts/modules/draggable-points";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import {HighchartsReact} from "highcharts-react-official";

import * as React from "react";

import SideBySide from "../../../../../testing/side-by-side";

import defaultOptions from "./default-options";

import type {Meta, StoryObj} from "@storybook/react";
import type {
    HighchartsReactRefObject,
    HighchartsReactProps,
} from "highcharts-react-official";

type Story = StoryObj<typeof NewGraph>;

// more(Highcharts);
HighchartsAccessibilityModule(Highcharts);
HighchartsDraggableModule(Highcharts);

const NewGraph = () => {
    const chartRef = React.useRef<HighchartsReactRefObject>(null);
    const [chartData, setChartData] = React.useState<
        object | ReadonlyArray<any> | undefined
    >();
    const options = React.useMemo<NonNullable<HighchartsReactProps["options"]>>(
        () => ({
            ...defaultOptions,
            title: {
                ...defaultOptions.title,
                text: "Drag any line endpoint to move it",
            },
            series: new Array(4).fill(0).map((_, i, array) => {
                const y = 5 - (10 / (array.length - 1)) * i;

                return {
                    type: "line",
                    color: "#00cc00",
                    data: [
                        [-5, y],
                        [5, y],
                    ],
                    dragDrop: {
                        draggableX: true,
                        draggableY: true,
                        dragPrecisionX: 1,
                        dragPrecisionY: 1,
                    },
                };
            }),
        }),
        [],
    );

    const handleDumpData = React.useCallback(() => {
        setChartData(
            chartRef.current?.chart?.series.map((s) =>
                s.data.map((d) => ({x: d.x, y: d.y})),
            ),
        );
    }, []);

    return (
        <SideBySide
            leftTitle={"Line Demo"}
            left={
                <View>
                    <HighchartsReact
                        highcharts={Highcharts}
                        ref={chartRef}
                        options={options}
                    />
                    <Button onClick={handleDumpData}>Dump Data</Button>
                </View>
            }
            rightTitle="Data"
            jsonObject={chartData}
        />
    );
};

const meta: Meta<typeof NewGraph> = {
    title: "Perseus/Widgets/New Graph",

    component: NewGraph,
};

export const LinesDemo: Story = {
    args: {},
};

export default meta;
