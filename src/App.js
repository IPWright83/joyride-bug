import React from "react";
import Joyride from "react-joyride";
import { Header } from "./Header";
import { ParallelCoords } from "./ParallelCoords";
import {ReactTable} from "./ReactTable";

import {
    data1Row,
    data25Rows,
    data150Rows,
    data2000Rows
} from "./data";

class App extends React.Component {

    constructor() {
        super();

        this.onStepChange = this.onStepChange.bind(this);
        this.onDataHighlight = this.onDataHighlight.bind(this);
        this.onBrushEnd = this.onBrushEnd.bind(this);

        this.state = {
            steps: [
                {
                    target: "#title",
                    content: "Message 1.",
                },
                {
                    target: "#parallel_coords",
                    content: "Message 2.",
                },
                {
                    target: ".dimension",
                    content: "Message 3.",
                },
                {
                    target: ".dimension:nth-of-type(2)",
                    content: "Message 4.",
                },
                {
                    target: ".dimension:nth-of-type(5)",
                    content: "Message 5."
                },
                {
                    target: ".dimension:nth-of-type(6)",
                    content: "Message 6."
                },
                {
                    target: ".dimension:nth-of-type(7)",
                    content: "Message 7."
                },
                {
                    target: "#parallel_coords",
                    content: "Message 8",
                },
                {
                    target: "#parallel_coords",
                    content: "Message 9.",
                },
                {
                    target: ".dimension",
                    content: "Message 10 - is in the wrong place",
                },
                {
                    target: "#parallel_coords",
                    content: "Message 11",
                },
                {
                    target: "#parallel_coords",
                    content: "Message 12",
                },
                {
                    target: "#parallel_coords",
                    content: "Message 13",
                },
                {
                    target: "#dropdown_module",
                    content: "Message 14"
                },
                {
                    target: "#fromDate",
                    content: "Message 15"
                },
                {
                    target: "body",
                    content: "Message 16",
                }
            ],
            filteredData: null,
            data: data1Row,
            brushes: {},
            highlight: "",
        };
    }

    onDataHighlight(id) {
        this.setState({ highlight: id });
    }

    onBrushEnd(data) {
        if (!data || data.length === 0) {
            this.setState({ filteredData: null });
        } else {
            this.setState({ filteredData: data });
        }
    }

    onStepChange(state) {
        if (state.action === "next" && state.index === 8) {
            this.setState({ data: data25Rows });
        }

        if (state.action === "next" && state.index === 9) {
            this.setState({ brushes: { "attendance": [0, 30] } });
        }

        if (state.action === "next" && state.index === 10) {
            this.setState({ data: data2000Rows });
            this.setState({ brushes: { } });
        }

        if (state.action === "next" && state.index === 11) {
            this.setState({ brushes: { "attendance": [0, 30] } });
        }

        if (state.action === "next" && state.index === 12) {
            this.setState({
                brushes: {
                    "attendance": [0, 30],
                    "year": [0, 1.5],
                }
            });
        }

        if (state.action === "next" && state.index === 15) {
            this.setState({ brushes: {} });
        }
    }

    render() {
        const { steps, data, filteredData } = this.state;

        // Ensure each data row has a key for linking events together
        const filteredDataWithKey = (filteredData || data).map((d,i) => ({ ...d, id: d.id || i }));
        const allDataWithKey = data.map((d,i) => ({ ...d, id: d.id || i }));

        return (
            <div>
                <Joyride steps={steps} continuous={true} callback={this.onStepChange}/>
                <Header />
                <ParallelCoords width={1000} height={500} data={allDataWithKey} brushes={this.state.brushes} highlight={this.state.highlight} onBrushEnd={this.onBrushEnd} />
                <ReactTable data={filteredDataWithKey} width={"75%"} onDataHighlight={this.onDataHighlight} />
            </div>
        );
    }

}

export { App };


// Todo
// Comment on saving in the query string
// Restrict the table data when filtering the chart
