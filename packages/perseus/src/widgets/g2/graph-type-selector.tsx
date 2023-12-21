import {View} from "@khanacademy/wonder-blocks-core";
import {Choice, RadioGroup} from "@khanacademy/wonder-blocks-form";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {StyleSheet} from "aphrodite";
import * as React from "react";

export const GraphTypes: ReadonlyArray<{
    widget: "interactive-graph" | "grapher";
    graphType: string;
}> = [
    // Interactive Graph
    {widget: "interactive-graph", graphType: "angle"},
    {widget: "interactive-graph", graphType: "circle"},
    {widget: "interactive-graph", graphType: "linear-system"},
    {widget: "interactive-graph", graphType: "point"},

    // Grapher
    {widget: "grapher", graphType: "absolute_value"},
    {widget: "grapher", graphType: "exponential"},
    {widget: "grapher", graphType: "linear"},
    {widget: "grapher", graphType: "logarithm"},
    {widget: "grapher", graphType: "quadratic"},
    {widget: "grapher", graphType: "sinusoid"},
    {widget: "grapher", graphType: "tangent"},
];

const graphWidgets = [
    ...GraphTypes.map((o) => o.widget)
        .reduce((set, widget) => set.add(widget), new Set<string>())
        .values(),
];

const GraphTypeSelector = (props: {
    onGraphTypeSelected: (graphType: string) => void;
}) => {
    const [selectedWidget, setSelectedWidget] = React.useState<
        typeof graphWidgets[number]
    >(graphWidgets[0]);
    const [graphType, setGraphType] = React.useState(GraphTypes[0].graphType);

    return (
        <View style={{flexDirection: "column"}}>
            {graphWidgets.map((widget) => (
                <React.Fragment key={widget}>
                    <Choice
                        groupName="widget-type"
                        label={widget}
                        value={widget}
                        checked={widget === selectedWidget}
                        onChange={() => {
                            setSelectedWidget(widget);
                        }}
                    />
                    <View style={{marginTop: Spacing.small_12}}>
                        <RadioGroup
                            groupName={`${widget}-graph-type`}
                            style={styles.graphType}
                            onChange={(newGraphType) =>
                                setGraphType(newGraphType)
                            }
                            selectedValue={graphType}
                        >
                            {GraphTypes.filter((o) => o.widget === widget).map(
                                (o) => {
                                    console.log(o.widget !== widget, widget, o);
                                    return (
                                        <Choice
                                            key={`${o.widget}-${o.graphType}`}
                                            label={o.graphType}
                                            value={o.graphType}
                                            disabled={
                                                o.widget !== selectedWidget
                                            }
                                        />
                                    );
                                },
                            )}
                        </RadioGroup>
                    </View>
                </React.Fragment>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    graphType: {
        marginRight: Spacing.medium_16,
        marginLeft: Spacing.medium_16,
        marginBottom: Spacing.medium_16,
    },
});

export default GraphTypeSelector;
