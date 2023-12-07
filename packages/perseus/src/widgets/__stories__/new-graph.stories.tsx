import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
// import more from "highcharts/highcharts-more";
import draggable from "highcharts/modules/draggable-points";
import {HighchartsReact} from "highcharts-react-official";
import * as React from "react";

import SideBySide from "../../../../../testing/side-by-side";

import type {Size} from "../../perseus-types";
import type {Meta, StoryObj} from "@storybook/react";
import type {
    HighchartsReactProps,
    HighchartsReactRefObject,
} from "highcharts-react-official";

type Story = StoryObj<typeof NewGraph>;

// more(Highcharts);
draggable(Highcharts);

const defaultOptions: HighchartsReactProps["options"] = {
    title: {
        text: undefined,
    },
    chart: {
        events: {},
    },
    xAxis: {
        tickPixelInterval: 1,
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        min: -10,
        max: 10,
        plotLines: [
            {
                color: "#888888",
                zIndex: 1,
                width: 1.5,
                dashStyle: "Solid",
                value: 0,
            },
        ],
    },
    yAxis: {
        tickPixelInterval: 1,
        min: -10,
        max: 10,
        plotLines: [
            {
                color: "#888888",
                zIndex: 1,
                width: 1.5,
                dashStyle: "Solid",
                value: 0,
            },
        ],
    },
};

const NewGraph = ({
    size = [400, 400],
    options,
    onMouseMove,
}: {
    size?: Size;
    options: HighchartsReact.Props["options"];
    onMouseMove?: (
        chart: Highcharts.Chart,
        chartPoint: [x: number, y: number],
    ) => void;
}) => {
    const chartRef = React.useRef<HighchartsReactRefObject>(null);
    const [chartData, setChartData] = React.useState<
        object | ReadonlyArray<any> | undefined
    >();

    const handleDumpData = React.useCallback(() => {
        setChartData(
            chartRef.current?.chart?.series.map((s) =>
                s.data.map((d) => ({x: d.x, y: d.y})),
            ),
        );
    }, []);

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const chart = chartRef?.current?.chart;
            if (!chart) {
                return;
            }

            const x = Math.round(chart.xAxis[0].toValue(e.offsetX, false));
            const y = Math.round(chart.yAxis[0].toValue(e.offsetY, false));
            onMouseMove?.(chart, [x, y]);
        };

        if (!onMouseMove) {
            return;
        }

        const container = chartRef?.current?.container.current;
        if (!container) {
            return;
        }
        container.addEventListener("mousemove", handleMouseMove);

        return () =>
            container.removeEventListener("mousemove", handleMouseMove);
    }, [chartRef, onMouseMove]);

    return (
        <SideBySide
            leftTitle="Chart"
            left={
                <View>
                    <HighchartsReact
                        highcharts={Highcharts}
                        ref={chartRef}
                        options={{
                            ...options,
                            chart: {
                                ...options?.chart,
                                ...size,
                            },
                        }}
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
    args: {
        options: {
            ...defaultOptions,
            title: {
                ...defaultOptions.title,
                text: "Drag any line endpoint to move it",
            },
            series: new Array(4).fill(0).map((_, i, array) => {
                const y = 5 + (10 / array.length) * i;

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
                    events: {
                        // Click to remove the line (series)
                        click: function (e) {
                            e.point.series.remove();
                        },
                    },
                };
            }),
        },
    },
};

// https://www.highcharts.com/demo/highcharts/dynamic-click-to-add
export const PointsDemo: Story = {
    args: {
        options: {
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
        },
    },
};

export default meta;
