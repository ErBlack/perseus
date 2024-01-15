import {Mafs, Coordinates, useMovablePoint} from "mafs";
import * as React from "react";

import {CustomLine} from "./mafs-components";
import InteractiveGraphLegacy from "./widget";

import type {Props, Rubric} from "./types";
import type {vec} from "mafs";

import "./interactive-graph.less";
import {PerseusScore} from "../../types";

const snapToInt = (point: vec.Vector2): vec.Vector2 => [
    Math.round(point[0]),
    Math.round(point[1]),
];

// Thoughts:
//   1. Everything is a component/hook! Very React-ish. Awesome.
//   2. Easy to extend. Things just render SVG.
//   3. Nice use of SVG vars and advanced concepts like SVG patterns.
//
// Questions:
//   1. Can we get a callback as the graph is mutated by the user? (onChange)
//
// Issues:
//   1. There is no "Ray" line type
//   2. Lines don't have line endings (arrows)
//   3. No clipping at graph boundaries (so we'll have to re-implement that to
//      get arrows).
//   4. Experimental KaTeX support for labels, we'd need to add our own
//      labelling support using MathJax.
//      Also: it'd be nice to work with the author to move KaTeX support to a
//      separate module to reduce bundle size (although tree shaking may take
//      care of that).
//   5. Some geometry/math knowledge needed to port.

function InteractiveGraph(props: Props, ref) {
    const pointA = useMovablePoint([6.998933866094739, 0.12216684506098457], {
        constrain: snapToInt,
    });
    const pointVertex = useMovablePoint([0, 0], {constrain: snapToInt});
    const pointB = useMovablePoint([6.535062985480412, 2.5085756468171017], {
        constrain: snapToInt,
    });

    // const coords = InteractiveGraphLegacy.getAngleCoords(props.graph, props);
    // console.log(coords);

    // const coords = React.useEffect(() => {}, [props.graph, props]);

    React.useImperativeHandle(ref, () => ({
        simpleValidate: (rubric: Rubric): PerseusScore => {
            console.log(rubric.correct.coords);
            console.log(pointA.point, pointVertex.point, pointB.point);
            /*
            0 [2.2059851900220853, 2.2059851900220853] (2)
            1 [-2, -2] (2)
            2 [-4.973144353700384, 5.004289159600586] (2)
            */
            return {
                type: "points",
                earned: 1,
                total: 1,
                message: "Yabadabadooooo",
            };
        },
    }));

    return (
        <Mafs pan={false} viewBox={{x: [-10, 10], y: [-10, 10]}}>
            <Coordinates.Cartesian />
            <CustomLine.Ray pointA={pointVertex.point} pointZ={pointA.point} />
            <CustomLine.Ray pointA={pointVertex.point} pointZ={pointB.point} />
            {pointA.element}
            {pointVertex.element}
            {pointB.element}
        </Mafs>
    );
}

export default React.forwardRef(InteractiveGraph);
