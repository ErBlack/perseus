import InteractiveGraph from "./mafs-widget";

import type {WidgetExports} from "../../types";

export default {
    name: "interactive-graph",
    displayName: "Interactive graph",
    widget: InteractiveGraph,
} as WidgetExports<typeof InteractiveGraph>;
