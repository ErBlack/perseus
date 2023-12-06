import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
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

draggable(Highcharts);

const defaultOptions: HighchartsReactProps["options"] = {
    title: {
        text: undefined,
    },
    chart: {
        type: "scatter",
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
    series: [{type: "scatter", data: [[2, 2]], color: "#00cc00"}],
};

const NewGraph = (props: {
    size?: Size;
    options: HighchartsReact.Props["options"];
}) => {
    const chart = React.useRef<HighchartsReactRefObject>(null);
    const [chartData, setChartData] = React.useState<
        object | ReadonlyArray<any> | undefined
    >();
    const size = React.useMemo(
        () => ({
            width: props.size?.[0] ?? 400,
            height: props.size?.[1] ?? 400,
        }),
        [props.size],
    );

    const handleDumpData = React.useCallback(() => {
        setChartData(
            chart.current?.chart?.series[0].data.map((d) => ({x: d.x, y: d.y})),
        );
    }, []);

    return (
        <SideBySide
            leftTitle="Chart"
            left={
                <View>
                    <HighchartsReact
                        highcharts={Highcharts}
                        ref={chart}
                        options={{
                            ...props.options,
                            chart: {
                                ...props.options?.chart,
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

// https://www.highcharts.com/demo/highcharts/dynamic-click-to-add
export const PointsDemoAddRemoveDrag: Story = {
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
