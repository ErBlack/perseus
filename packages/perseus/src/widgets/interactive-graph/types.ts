import type {PerseusInteractiveGraphWidgetOptions} from "../../perseus-types";
import type {WidgetProps} from "../../types";

export type RenderProps = PerseusInteractiveGraphWidgetOptions; // There's no transform function in exports
export type Rubric = PerseusInteractiveGraphWidgetOptions;
export type Props = WidgetProps<RenderProps, Rubric>;
export type DefaultProps = {
    labels: Props["labels"];
    range: Props["range"];
    step: Props["step"];
    backgroundImage: Props["backgroundImage"];
    markings: Props["markings"];
    showTooltips: Props["showTooltips"];
    showProtractor: Props["showProtractor"];
    showRuler: Props["showRuler"];
    rulerLabel: Props["rulerLabel"];
    rulerTicks: Props["rulerTicks"];
    graph: Props["graph"];
};
