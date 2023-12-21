import {View} from "@khanacademy/wonder-blocks-core";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {HeadingMedium} from "@khanacademy/wonder-blocks-typography";
import {addEvent, JSXGraph} from "jsxgraph";
import * as React from "react";

import GraphTypeSelector from "./graph-type-selector";

import type {Coord} from "../../interactive2/types";
import type {Board, LineAttributes} from "jsxgraph";

/**
# Questions

* Can we click to add points, lines, polygons, circles?
* Can we extract the shapes for grading?

## Accessibility

### Voiceover

### Keyboard


*/

const lineStyle: LineAttributes = {
    firstArrow: true,
    lastArrow: true,
};

const rayStyle: LineAttributes = {
    straightFirst: false,
    lastArrow: true,
};

type Props = {
    id?: string;
};

const makePoint = (board: Board, x: number, y: number) => {
    return board.create("point", [x, y], {
        snapToGrid: true,
        snapSizeX: 1,
        snapSizeY: 1,
    });
};

const makeLine = (board: Board, p1: Coord, p2: Coord) => {
    const line = board.create(
        "line",
        [makePoint(board, p1[0], p1[1]), makePoint(board, p2[0], p2[1])],
        lineStyle,
    );
    return line;
};

const makeRay = (board: Board, p1: Coord, p2: Coord) => {
    const line = board.create(
        "line",
        [makePoint(board, p1[0], p1[1]), makePoint(board, p2[0], p2[1])],
        rayStyle,
    );
    return line;
};

const graphInitFunctions = {
    angle: (board: Board) => {
        board.create(
            "angle",
            [
                [6, 0],
                [0, 0],
                [6, 4],
            ],
            {
                orthoType: "sector",
                arc: {
                    draft: true,
                },
            },
        );
    },
};

const G2 = (props: Props) => {
    const container = React.useRef<HTMLElement>(null);
    const [board, setBoard] = React.useState<Board | null>(null);
    const [graphType, setGraphType] = React.useState<string>("angle");

    React.useEffect(() => {
        if (!container.current) {
            return;
        }

        const board = JSXGraph.initBoard(container.current.id, {
            grid: true,
            axis: true,
            boundingBox: [-10, 10, 10, -10],
            maxBoundingBox: [-10, 10, 10, -10],
        });

        // Add point on click
        // addEvent(
        //     container.current,
        //     "click",
        //     (e) => {
        //         console.log(e);
        //         var coords = new JXG.Coords(
        //             JXG.COORDS_BY_SCREEN,
        //             board.getMousePosition(e),
        //             board,
        //         );
        //         board.create("point", coords.usrCoords.slice(1));
        //     },
        //     container.current,
        // );

        // makePoint(board, 4, -3);
        // makeLine(board, [1, 1], [5, 5]);
        // makeRay(board, [-5, -2], [-3, 4]);

        setBoard(board);

        return () => {
            JSXGraph.freeBoard(board);
            setBoard(null);
        };
    }, [container]);

    React.useEffect(() => {
        const setupFn = graphInitFunctions[graphType];
        if (setupFn && board) {
            setupFn(board);
        }
    }, [board, graphType]);

    return (
        <View style={{flexDirection: "row", gap: Spacing.medium_16}}>
            <View>
                <HeadingMedium style={{marginBottom: Spacing.medium_16}}>
                    Select a graph type
                </HeadingMedium>
                <GraphTypeSelector
                    onGraphTypeSelected={(graphType) => setGraphType(graphType)}
                />
            </View>

            <View>
                <HeadingMedium style={{marginBottom: Spacing.medium_16}}>
                    &nbsp;
                </HeadingMedium>
                <View
                    id="paper"
                    ref={container}
                    style={{width: 400, height: 400}}
                />
            </View>
        </View>
    );
};

export default G2;
