import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import * as Highcharts from "highcharts";
// import more from "highcharts/highcharts-more";
// import debuggable from "highcharts/modules/debugger";
import HighchartsAnnotationsModule from "highcharts/modules/annotations";
import HighchartsDraggableModule from "highcharts/modules/draggable-points";
import HighchartsAccessibilityModule from "highcharts/modules/accessibility";
import {HighchartsReact} from "highcharts-react-official";
import * as React from "react";

import SideBySide from "../../../../../testing/side-by-side";
import InteractiveGraphWidget from "../interactive-graph";

import defaultOptions from "./default-options";

import type {Meta, StoryObj} from "@storybook/react";
import type {
    HighchartsReactRefObject,
    HighchartsReactProps,
} from "highcharts-react-official";

type Story = StoryObj<typeof NewGraph>;

HighchartsAccessibilityModule(Highcharts);
HighchartsAnnotationsModule(Highcharts);
HighchartsDraggableModule(Highcharts);

// Not recommended: https://stackoverflow.com/a/58484863/11807
const customRendererOption: Highcharts.ChartEventsOptions = {
    // Create the path that we'll use to render the ray.
    load: function () {
        const chart = this;
        const color = "red";

        if (!chart.customLine) {
            const ray = chart.renderer
                .path(["M", 0, 0, "L", 0, 0])
                .attr({
                    stroke: color,
                    "stroke-width": 2,
                    "stroke-dasharray": "10 5",
                    zIndex: -1,
                })
                .add();

            chart.customLine = ray;
        }
    },

    // Update the ray's position as points are dragged.
    render: function () {
        const chart = this;
        const series = chart.series[0];
        const from = 0;
        const to = 1;

        const ax = chart.plotLeft + series.points[from].plotX;
        const ay = chart.plotTop + series.points[from].plotY;
        const bx = chart.plotLeft + series.points[to].plotX;
        const by = chart.plotTop + series.points[to].plotY;

        const pathAttribute = series.visible
            ? {d: ["M", ax, ay, "L", bx, by]}
            : {d: ["M", 0, 0, "L", 0, 0]};

        // TODO: Extend to edge of chart
        // TODO: Add arrowhead at end

        chart.customLine.attr(pathAttribute);
    },

    redraw: function () {},
};

// Not ideal as the annotation sits above the points.
// Also, doesn't seem like we can extend the line past the end of one of the
// points.
const annotationOption: Highcharts.AnnotationsOptions = {
    labels: [{text: "hello"}],
    draggable: "",
    zIndex: 1,
    shapes: [
        {
            type: "path",
            strokeWidth: 2,
            stroke: "red",
            fill: "none",
            // Points are the id's of the points in series.
            points: ["0", "1"],
        },
    ],
};

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
                text: "Drag any point to move the ray",
            },
            chart: {
                events: customRendererOption,
            },
            annotations: [
                // annotationOption
            ],
            series: [
                {
                    type: "scatter",
                    cursor: "grab",
                    dragDrop: {
                        draggableX: true,
                        draggableY: true,
                        dragPrecisionX: 1,
                        dragPrecisionY: 1,
                        dragMinX: -10,
                        dragMaxX: 10,
                        dragMinY: -10,
                        dragMaxY: 10,
                    },
                    keys: ["id"],
                    data: InteractiveGraphWidget.widget
                        .pointsFromNormalized(
                            {
                                range: [
                                    [-10, 10],
                                    [-10, 10],
                                ],
                                step: [1, 1],
                            },
                            [
                                [0.25, 0.75],
                                [0.75, 0.75],
                            ],
                        )
                        .map((p, i) => ({x: p[0], y: p[1], id: i.toString()})),
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
            leftTitle={"Ray Demo"}
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

export const RaysDemo: Story = {
    args: {},
};

export default meta;
