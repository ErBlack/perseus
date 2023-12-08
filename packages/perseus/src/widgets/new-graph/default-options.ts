import type {HighchartsReactProps} from "highcharts-react-official";

const defaultOptions: NonNullable<HighchartsReactProps["options"]> = {
    title: {
        text: undefined,
    },
    chart: {
        width: 400,
        height: 400,
        events: {},
    },
    xAxis: {
        tickPixelInterval: 1,
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        min: -10,
        max: 10,
        startOnTick: false,
        endOnTick: false,
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
        startOnTick: false,
        endOnTick: false,
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

export default defaultOptions;
