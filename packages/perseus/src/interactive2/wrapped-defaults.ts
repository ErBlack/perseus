/* eslint-disable @babel/no-invalid-this */
/**
 * Default methods for a wrapped movable.
 */

import {vector as kvector} from "@khanacademy/kmath";
import $ from "jquery";
import _ from "underscore";

import InteractiveUtil from "./interactive-util";
import objective_ from "./objective_";

import type {Coord} from "./types";
import type {Graphie} from "../util/graphie";

/*
 * These functions, when called on the wrapped object, simply pass the
 * arguments to the underlying Raphael object.
 */
const PASS_TO_RAPHAEL = ["attr", "animate"];

export const WrappedDefaultsOld: any = _.extend(
    {
        transform: function (transformation) {
            const prefixedTransform = InteractiveUtil.getPrefixedTransform();
            // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
            this.wrapper.style[prefixedTransform] = transformation;
        },

        toFront: function () {
            const parentNode = this.wrapper.parentNode;
            // TODO(emily): Sometimes, we call `.remove()` but then hold a
            // reference to this object, and sometimes call `.toFront` on it.
            // Notably, this happens in the reflection transformation in the
            // Transformer widget. This is a hacky fix. Make this less bad.
            if (parentNode) {
                parentNode.appendChild(this.wrapper);
            }
        },

        toBack: function () {
            const parentNode = this.wrapper.parentNode;
            if (parentNode.firstChild !== this.wrapper) {
                parentNode.insertBefore(this.wrapper, parentNode.firstChild);
            }
        },

        remove: function () {
            this.visibleShape.remove();
            $(this.wrapper).remove();
        },

        getMouseTarget: function () {
            return this.visibleShape[0];
        },

        moveTo: function (point) {
            const delta = kvector.subtract(
                this.graphie.scalePoint(point),
                this.graphie.scalePoint(this.initialPoint),
            );
            const do3dTransform = InteractiveUtil.getCanUse3dTransform();
            const transformation =
                "translateX(" +
                delta[0] +
                "px) " +
                "translateY(" +
                delta[1] +
                "px)" +
                (do3dTransform ? " translateZ(0)" : "");
            this.transform(transformation);
        },

        hide: function () {
            this.visibleShape.hide();
        },

        show: function () {
            this.visibleShape.show();
        },
    },
    objective_.mapObjectFromArray(PASS_TO_RAPHAEL, function (attribute) {
        return function (...args) {
            // @ts-expect-error - TS2683 - 'this' implicitly has type 'any' because it does not have a type annotation.
            this.visibleShape[attribute](...args);
        };
    }),
);

abstract class WrappedDefaults {
    graphie: Graphie;
    abstract wrapper: HTMLDivElement;
    abstract visibleShape: {
        /*
         * These functions, when called on the wrapped object, simply pass the
         * arguments to the underlying Raphael object.
         */
        attr: (...args: any[]) => void;
        animate: (...args: any[]) => void;
        remove: () => void;
        hide: () => void;
        show: () => void;
    };
    initialPoint: Coord;

    constructor(graphie: Graphie, initialPoint: Coord) {
        this.graphie = graphie;
        this.initialPoint = initialPoint;
    }

    transform(transformation) {
        const prefixedTransform = InteractiveUtil.getPrefixedTransform();
        // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
        this.wrapper.style[prefixedTransform] = transformation;
    }

    toFront() {
        const parentNode = this.wrapper.parentNode;
        // TODO(emily): Sometimes, we call `.remove()` but then hold a
        // reference to this object, and sometimes call `.toFront` on it.
        // Notably, this happens in the reflection transformation in the
        // Transformer widget. This is a hacky fix. Make this less bad.
        if (parentNode) {
            parentNode.appendChild(this.wrapper);
        }
    }

    toBack() {
        const parentNode = this.wrapper.parentNode;
        if (parentNode != null && parentNode.firstChild !== this.wrapper) {
            parentNode.insertBefore(this.wrapper, parentNode.firstChild);
        }
    }

    remove() {
        this.visibleShape.remove();
        $(this.wrapper).remove();
    }

    getMouseTarget() {
        return this.visibleShape[0];
    }

    moveTo(point) {
        const delta = kvector.subtract(
            this.graphie.scalePoint(point),
            this.graphie.scalePoint(this.initialPoint),
        );
        const do3dTransform = InteractiveUtil.getCanUse3dTransform();
        const transformation =
            "translateX(" +
            delta[0] +
            "px) " +
            "translateY(" +
            delta[1] +
            "px)" +
            (do3dTransform ? " translateZ(0)" : "");
        this.transform(transformation);
    }

    hide() {
        this.visibleShape.hide();
    }

    show() {
        this.visibleShape.show();
    }

    attr(...args) {
        this.visibleShape.attr(...args);
    }

    animate(...args) {
        this.visibleShape.animate(...args);
    }
}

export default WrappedDefaults;
