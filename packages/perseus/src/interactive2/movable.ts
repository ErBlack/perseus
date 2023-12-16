/**
 * Movable
 *
 * A Movable Something, that sends onMove events based on the
 * mouse coordinate (graphie unscaled, non-pixel-value) of the
 * move.
 *
 * Other MovableThings should generally have a Movable field, and
 * let this class handle all of the virtual mouse events, and then
 * take appropriate action in onMoveStart, onMove, onMoveEnd
 */
import {point as kpoint} from "@khanacademy/kmath";
import $ from "jquery";
import _ from "underscore";
import {Errors} from "../logging/log";
import {PerseusError} from "../perseus-error";

import InteractiveUtil from "./interactive-util";

const normalizeOptions = InteractiveUtil.normalizeOptions;

const assert = InteractiveUtil.assert;

function getKey(eventName: any, id: any) {
    return eventName + ":" + id;
}

function getEventName(key) {
    return key.split(":")[0];
}

// state parameters that should be converted into an array of
// functions
const FUNCTION_ARRAY_OPTIONS = [
    "add",
    "modify",
    "draw",
    "remove",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "onClick",
];

// Default "props" and "state". Both are added to this.state and
// receive magic getter methods (this.isHovering() etc).
// However, properties in DEFAULT_PROPS are updated on `modify()`,
// while those in DEFAULT_STATE persist and are not updated.
// Things that the user might want to change should be on "props",
// while things used to render the movable should be on "state".
const DEFAULT_PROPS = {
    cursor: null,
} as const;
const DEFAULT_STATE = {
    added: false,
    isHovering: false,
    isMouseOver: false,
    isDragging: false,
    mouseTarget: null,
} as const;

type State = {
    constraints: any;
    // Event Handlers
    add: [];
    modify: [];
    draw: [];
    remove: Array<(remove: any) => unknown>;
    onMoveStart: Array<
        (
            onMoveStart: any,
            startMouseCoord: any,
            startMouseCoord1: any,
        ) => unknown
    >;
    onMove: Array<
        (onMove: any, mouseCoord: any, prevMouseCoord: any) => unknown
    >;
    onMoveEnd: Array<
        (onMoveEnd: any, prevMouseCoord: any, startMouseCoord: any) => unknown
    >;
    onClick: Array<
        (onClick: any, prevMouseCoord: any, startMouseCoord: any) => unknown
    >;

    // State
    id: string;
    mouseTarget: any;
    added: any;
    isMouseOver: boolean;
    isDragging: boolean;
    isHovering: boolean;
};

class Movable {
    graphie: any;
    state: State;
    prevState?: State;
    private _listenerMap: any;

    constructor(graphie: any, options: any) {
        this.graphie = graphie;
        // @ts-expect-error - TS2740 - modify() fills in the rest of the
        // default state.
        this.state = {
            // Set here because this must be unique for each instance
            id: _.uniqueId("movable"),
        };

        // We only set DEFAULT_STATE once, here
        this.modify({...DEFAULT_STATE, options});
    }

    cloneState(): State {
        return {...this.state};
    }

    protected _createDefaultState() {
        return {
            id: this.state.id,
            add: [],
            modify: [],
            draw: [],
            remove: [],
            onMoveStart: [],
            onMove: [],
            onMoveEnd: [],
            onClick: [],

            // We only update props here, because we want things on state to
            // be persistent, and updated appropriately in modify()
            ...DEFAULT_PROPS,
        };
    }

    /**
     * Fire an onSomething type event to all functions in listeners
     */
    _fireEvent(listeners, currentValue?, previousValue?) {
        _.invoke(listeners, "call", this, currentValue, previousValue);
    }

    /**
     * Combine the array of constraints functions
     * Returns either an [x, y] coordinate or false
     */
    _applyConstraints(current, previous, extraOptions) {
        let skipRemaining = false;

        return _.reduce(
            this.state.constraints,
            (memo, constraint) => {
                // A move that has been cancelled won't be propagated to later
                // constraints calls
                if (memo === false) {
                    return false;
                }

                if (skipRemaining) {
                    return memo;
                }

                const result = constraint.call(this, memo, previous, {
                    onSkipRemaining: () => {
                        skipRemaining = true;
                    },
                    ...extraOptions,
                });

                if (result === false) {
                    // Returning false cancels the move
                    return false;
                }
                if (kpoint.is(result, 2)) {
                    // Returning a coord from constraints overrides the move
                    return result;
                }
                if (result === true || result == null) {
                    // Returning true or undefined allow the move to occur
                    return memo;
                }
                // Anything else is an error
                throw new PerseusError(
                    "Constraint returned invalid result: " + result,
                    Errors.Internal,
                );
            },
            current,
            this,
        );
    }

    /**
     * Call all draw functions, and update our prevState for the next
     * draw function
     */
    draw() {
        const currState = this.cloneState();
        this._fireEvent(this.state.draw, currState, this.prevState);
        this.prevState = currState;
    }

    /**
     * Add a listener to any event: startMove, constraints, onMove, onMoveEnd,
     * etc. If a listener is already bound to the given eventName and id, then
     * it is overwritten by func.
     *
     * eventName: the string name of the event to listen to. one of:
     *   "onMoveStart", "onMove", "onMoveEnd", "draw", "remove"
     *
     * id: a string id that can be used to remove this event at a later time
     *   note: adding multiple listeners with the same id is undefined behavior
     *
     * func: the function to call when the event happens, which is called
     *   with the event's standard parameters [usually (coord, prevCoord) or
     *   (state, prevState)]
     */
    listen(eventName, id, func) {
        this._listenerMap = this._listenerMap || {};

        // If there's an existing handler, replace it by using its index in
        // `this.state[eventName]`; otherwise, add this handler to the end
        const key = getKey(eventName, id);
        const index = (this._listenerMap[key] =
            this._listenerMap[key] || this.state[eventName].length);
        this.state[eventName][index] = func;
    }

    /**
     * Remove a previously added listener, by the id specified in the
     * corresponding listen() call
     *
     * If the given id has not been registered already, this is a no-op
     */
    unlisten(eventName, id) {
        this._listenerMap = this._listenerMap || {};

        const key = getKey(eventName, id);
        const index = this._listenerMap[key];
        if (index !== undefined) {
            // Remove handler from list of event handlers and listenerMap
            this.state[eventName].splice(index, 1);
            delete this._listenerMap[key];

            // Re-index existing events: if they occur after `index`, decrement
            const keys = _.keys(this._listenerMap);
            _.each(
                keys,
                function (key) {
                    if (
                        getEventName(key) === eventName &&
                        // @ts-expect-error - TS2683 - 'this' implicitly has type 'any' because it does not have a type annotation.
                        this._listenerMap[key] > index
                    ) {
                        // @ts-expect-error - TS2683 - 'this' implicitly has type 'any' because it does not have a type annotation.
                        this._listenerMap[key]--;
                    }
                },
                this,
            );
        }
    }

    /**
     * Resets the object to its state as if it were constructed with
     * `options` originally. The only state maintained is `state.id`
     *
     * Analogous to React.js's replaceProps
     */
    modify(options) {
        this.update({...this._createDefaultState(), ...options});
    }

    /**
     * Simulates a mouse grab event on the movable object.
     */
    grab(coord) {
        assert(kpoint.is(coord));
        const self = this;
        const graphie = self.graphie;
        const state = self.state;

        state.isHovering = true;
        state.isDragging = true;
        graphie.isDragging = true;

        const startMouseCoord = coord;
        let prevMouseCoord = startMouseCoord;
        self._fireEvent(state.onMoveStart, startMouseCoord, startMouseCoord);

        const moveHandler = function (e: any) {
            e.preventDefault();

            const mouseCoord = graphie.getMouseCoord(e);
            self._fireEvent(state.onMove, mouseCoord, prevMouseCoord);
            self.draw();
            prevMouseCoord = mouseCoord;
        };

        const upHandler = function (e: any) {
            $(document).unbind("vmousemove", moveHandler);
            $(document).unbind("vmouseup", upHandler);
            if (state.isHovering) {
                self._fireEvent(state.onClick, prevMouseCoord, startMouseCoord);
            }
            state.isHovering = self.state.isMouseOver;
            state.isDragging = false;
            graphie.isDragging = false;
            self._fireEvent(state.onMoveEnd, prevMouseCoord, startMouseCoord);
            self.draw();
        };

        $(document).bind("vmousemove", moveHandler);
        $(document).bind("vmouseup", upHandler);
    }

    /**
     * Adjusts constructor parameters without changing previous settings
     * for any option not specified
     *
     * Analogous to React.js's setProps
     */
    update(options) {
        const self = this;
        const graphie = self.graphie;

        const prevState = self.cloneState();
        const state = _.extend(
            self.state,
            normalizeOptions(FUNCTION_ARRAY_OPTIONS, options),
        );

        // the invisible shape in front of the point that gets mouse events
        if (state.mouseTarget && !prevState.mouseTarget) {
            let $mouseTarget;
            if (state.mouseTarget.getMouseTarget) {
                $mouseTarget = $(state.mouseTarget.getMouseTarget());
            } else {
                $mouseTarget = $(state.mouseTarget[0]);
            }

            const isMouse = !("ontouchstart" in window);

            if (isMouse) {
                $mouseTarget.on("vmouseover", function () {
                    state.isMouseOver = true;
                    if (!graphie.isDragging) {
                        state.isHovering = true;
                    }
                    if (self.state.added) {
                        // Avoid drawing if the point has been removed
                        self.draw();
                    }
                });

                $mouseTarget.on("vmouseout", function () {
                    state.isMouseOver = false;
                    if (!state.isDragging) {
                        state.isHovering = false;
                    }
                    if (self.state.added) {
                        // Avoid drawing if the point has been removed
                        self.draw();
                    }
                });
            }

            // Prevent the page from scrolling when we grab and drag the
            // movable object on a mobile device.
            $mouseTarget[0].addEventListener(
                "touchstart",
                function (event) {
                    event.preventDefault();
                },
                {passive: false},
            );

            $mouseTarget.on("vmousedown", function (e) {
                if (e.which !== 0 && e.which !== 1) {
                    return;
                }
                e.preventDefault();

                const mouseCoord = graphie.getMouseCoord(e);
                self.grab(mouseCoord);
            });
        }

        if (state.mouseTarget && state.cursor !== undefined) {
            let $mouseTarget;
            if (state.mouseTarget.getMouseTarget) {
                $mouseTarget = $(state.mouseTarget.getMouseTarget());
            } else {
                $mouseTarget = $(state.mouseTarget[0]);
            }

            // "" removes the css cursor if state.cursor is null
            $mouseTarget.css("cursor", state.cursor || "");
        }

        // Trigger an add event if this hasn't been added before
        if (!state.added) {
            self._fireEvent(state.modify, self.cloneState(), {});
            state.added = true;

            // Update the state for `added` and in case the add event
            // changed it
            self.prevState = self.cloneState();
        }

        // Trigger a modify event
        self._fireEvent(state.modify, self.cloneState(), self.prevState);
    }

    remove() {
        this.state.added = false;
        this._fireEvent(this.state.remove);
        if (this.state.mouseTarget) {
            $(this.state.mouseTarget).off();
            this.state.mouseTarget.remove();
            this.state.mouseTarget = null;
        }
    }

    // Change z-order to back
    toBack() {
        if (this.state.mouseTarget) {
            this.state.mouseTarget.toBack();
        }
    }

    // Change z-order to front
    toFront() {
        if (this.state.mouseTarget) {
            this.state.mouseTarget.toFront();
        }
    }
}

InteractiveUtil.createGettersFor(
    Movable,
    _.extend({}, DEFAULT_PROPS, DEFAULT_STATE),
);
// InteractiveUtil.addMovableHelperMethodsTo(Movable);

export default Movable;
