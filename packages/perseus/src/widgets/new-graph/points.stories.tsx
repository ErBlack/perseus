import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
// import more from "highcharts/highcharts-more";
import draggable from "highcharts/modules/draggable-points";
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
draggable(Highcharts);

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
                text: "Click to add a point, click a point to remove it, drag any point to move it",
            },
            chart: {
                ...defaultOptions.chart,
                events: {
                    // Click to add a point
                    click: function (e) {
                        // find the clicked values and the series
                        // @ts-expect-error - types are wrong
                        const x = Math.round(e.xAxis[0].value);
                        // @ts-expect-error - types are wrong
                        const y = Math.round(e.yAxis[0].value);
                        const series = this.series[0];

                        // Add it
                        series.addPoint([x, y]);
                    },
                },
            },
            series: [
                {
                    type: "scatter",
                    color: "#00cc00",
                    cursor: "grab",

                    // Requires "highcharts/modules/draggable-points"
                    dragDrop: {
                        draggableX: true,
                        draggableY: true,
                        dragPrecisionX: 1,
                        dragPrecisionY: 1,
                    },
                    events: {
                        // Click to remove a point
                        click: function (e) {
                            const clickedPoint = e.point;
                            clickedPoint.remove();
                        },
                    },
                    point: {
                        events: {
                            dragStart: function (e) {
                                this.series.update({
                                    type: "scatter",
                                    cursor: "grabbing",
                                });
                            },
                            drop: function (e) {
                                this.series.update({
                                    type: "scatter",
                                    cursor: "grab",
                                });
                            },
                        },
                    },
                    data: [
                        [2, 2],
                        [5, 5],
                        [-3, 4],
                        [-5, -4],
                    ],
                },
            ],
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
            leftTitle={"Points Demo"}
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

// https://www.highcharts.com/demo/highcharts/dynamic-click-to-add
export const PointsDemo: Story = {
    args: {},
};

export default meta;
