import React, { useEffect, useRef } from "react";

import "parcoord-es/dist/parcoords.css";
import ParCoords from "parcoord-es";
import * as d3 from "d3";


// Define the dimensions that are going to be used on the chart
const dimensions = {
    b: {
        title: "B",
        tickFormat: d => `${d}%`,
        index: 0,
    },
    c: {
        title: "C",
        index: 1,
    },
    d: {
        title: "D",
        index: 2,
    },
    e: {
        title: "E",
        index: 3,
    },
    f: {
        title: "F",
        index: 4,
    },
    g: {
        title: "G",
        tickValues: [1, 2, 3, 4],
        tickFormat: d => `${d}`,    // Remove the decimal points
        index: 5,
    },
    h: {
        title: "H",
        index: 6,
        type: "string",
        tickFormat: d => d === "true" ? "Yes" : "No",
    },
};

const getPathColor = d => {
    // We're inserting some data to fake
    if (d.isHidden) {
        return "rgba(0,0,0,0)";
    }

    return d.b > 30 ? "rgba(42, 104, 26, 1)" : "rgba(204, 40, 41, 1)";
}

const ParallelCoords = (props) => {
    const root = useRef(null);          // This is the root element we draw to

    // Create the actual chart
    const chart = ParCoords({ nullValueSeparator: "bottom" });

    useEffect(() => {

        d3.select(root.current).html("");

        const width = props.width;
        const height = props.height;

        // Nasty hack to fix some of the scales
        const paddedData = [
            { name: "__0__", b: 0, c: 10, d: 15, e: 5, f: 30, g: 4, h: false, isHidden: true },
            ...props.data,
            { name: "__1__", b: 100, c: 0, d: 0, e: 0, f: 0, g: 1, h: true, isHidden: true },
        ];

        chart("#parallel_coords")
            .alpha(0.4)
            .mode("queue")
            .height(props.height)
            .margin({
                top: 36,
                left: 0,
                right: 0,
                bottom: 16,
            })
            .data(paddedData)
            .dimensions(dimensions)
            .hideAxis(["name", "id", "isHidden"])
            .reorderable()
            .color((d,i) => { return getPathColor(d); })
            // .alphaOnBrushed(0.05)
            .brushMode("1D-axes")
            .render()
            .brushReset();

        if (props.highlight) {
            const d = props.data.filter(d => d.id == props.highlight);
            chart.highlight(d);
        }

        chart.on("brushend", function(data, args) {
            console.log(args);
            props.onBrushEnd(data);
        });

        Object
            .keys(props.brushes)
            .forEach(k => {
                const values = props.brushes[k];
                const brush = { [k]: values };
                chart.brushExtents(brush);
            })

    }, [props.data, props.width, props.height, props.brushes, props.highlight]);

    const style = {
        height: `${props.height + 36 + 16}px`,
        width: `${props.width}px`,//"1600px",
    };

    return (
        <div id="parallel_coords" ref={root} className="section parcoords" style={style}></div>
    );
};

export { ParallelCoords };
