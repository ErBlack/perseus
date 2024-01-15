import {number as knumber, vector as kvector} from "@khanacademy/kmath";
import {Interval, Theme, usePaneContext, useTransformContext, vec} from "mafs";
import * as React from "react";

import type {Stroked} from "mafs";

export interface RayProps extends Stroked {
    pointA: vec.Vector2;
    pointZ: vec.Vector2;
}

const getClipPoint = function (
    graph: any,
    xPaneRange: Interval,
    yPaneRange: Interval,
    coord,
    angle: number,
) {
    const xExtent = xPaneRange[1] - xPaneRange[0];
    const yExtent = yPaneRange[1] - yPaneRange[0];
    const distance = xExtent + yExtent;

    const angleVec = graph.unscaleVector(kvector.cartFromPolarDeg(1, angle));
    const distVec = kvector.scale(kvector.normalize(angleVec), distance);
    const farCoord = kvector.add(coord, distVec);
    const scaledAngle = kvector.polarDegFromCart(angleVec)[1];
    const clipPoint = graph.constrainToBoundsOnAngle(
        farCoord,
        4,
        (scaledAngle * Math.PI) / 180,
    );
    return clipPoint;
};

export function Ray({
    pointA,
    pointZ,
    color = Theme.foreground,
    style = "solid",
    weight = 2,
    opacity = 1.0,
}: RayProps) {
    const {xPaneRange, yPaneRange} = usePaneContext();

    const [xMin, xMax] = xPaneRange;
    const [yMin, yMax] = yPaneRange;

    const {userTransform} = useTransformContext();

    const tPointA = vec.transform(pointA, userTransform);
    const tPointZ = vec.transform(pointZ, userTransform);

    const slope = (tPointZ[1] - tPointA[1]) / (tPointZ[0] - tPointA[0]);
    const angle = Math.atan(slope); // -pi/2 through pi/2

    console.log(
        "slope: " +
            knumber.round(slope, 3) +
            ", angle: " +
            knumber.round(angle, 3),
    );

    /* if slope < 1, use xMin or xMax.
       if slope > 1, use yMin or yMax.
    */

    let offscreen: vec.Vector2;
    if (slope < 1) {
        if (tPointZ[1] - tPointA[1] >= 0) {
            offscreen = [(yMax - tPointA[1]) / slope + tPointA[0], yMax];
        } else {
            offscreen = [(yMin - tPointA[1]) / slope + tPointA[0], yMin];
        }
    } else {
        if (tPointZ[0] - tPointA[0] >= 0) {
            offscreen = [xMax, slope * (xMax - tPointA[0]) + tPointA[1]];
        } else {
            offscreen = [xMin, slope * (xMin - tPointA[0]) + tPointA[1]];
        }
    }
    // console.log("offscreen", offscreen);

    return (
        <line
            x1={knumber.round(tPointA[0], 2)}
            y1={knumber.round(tPointA[1], 2)}
            x2={knumber.round(offscreen[0], 2)}
            y2={knumber.round(offscreen[1], 2)}
            style={{
                stroke: color,
                transform: "var(--mafs-view-transform)",
                vectorEffect: "non-scaling-stroke",
            }}
            strokeWidth={weight}
            opacity={opacity}
            strokeDasharray={style === "dashed" ? "4,3" : undefined}
        />
    );
}
