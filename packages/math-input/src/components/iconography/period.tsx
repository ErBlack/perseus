/**
 * An autogenerated component that renders the PERIOD iconograpy in SVG.
 *
 * Generated with: /Users/jeremy/khan/perseus/packages/math-input/tools/svg-to-react/convert.ts
 */
import * as React from "react";

const Period = (props: {color: string}): React.ReactNode => {
    return (
        <svg width="48" height="48" viewbox="0 0 48 48">
            <defs>
                <path id="a" d="M0 0h600v956H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g>
                    <path fill="none" d="M0 0h48v48H0z" />
                    <circle fill={props.color} cx="24" cy="30" r="2" />
                </g>
                <g transform="translate(-502 -420)">
                    <mask id="b" fill="#fff">
                        <use xlinkhref="#a" />
                    </mask>
                    <use fill="#FAFAFA" xlink:href="#a" />
                    <g mask="url(#b)">
                        <g transform="translate(502 420)">
                            <path fill="none" d="M0 0h48v48H0z" />
                            <circle fill="#3B3E40" cx="24" cy="30" r="2" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Period;
