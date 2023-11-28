import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
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

const options: HighchartsReactProps["options"] = {
    title: {
        text: undefined,
    },
    chart: {
        type: "scatter",
        events: {
            click: function (e) {
                // find the clicked values and the series
                const x = Math.round(e.xAxis[0].value);
                const y = Math.round(e.yAxis[0].value);
                const series = this.series[0];

                // Add it
                series.addPoint([x, y]);
            },
        },
    },
    xAxis: {
        tickPixelInterval: 1,
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        min: -10,
        max: 10,
    },
    yAxis: {
        tickPixelInterval: 1,
        min: -10,
        max: 10,
    },
    series: [
        {
            data: [[2, 2]],
            color: "#00cc00",
        },
    ],
};

const NewGraph = ({size = [400, 400]}: {size: Size}) => {
    const chart = React.useRef<HighchartsReactRefObject>();
    const [chartData, setChartData] = React.useState<
        object | ReadonlyArray<any> | undefined
    >();

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
                            ...options,
                            chart: {
                                ...options?.chart,
                                width: size[0],
                                height: size[1],
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

export const PointsClickToAdd: Story = {
    args: {},
};

export default meta;
