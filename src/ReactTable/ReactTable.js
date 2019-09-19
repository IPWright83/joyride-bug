import React from "react";


const ReactTable = (props) => {

    function handleMouseOver(event){
        let el = event.currentTarget;
        props.onDataHighlight(el.getAttribute('data-key'));
    }

    function handleMouseEnter(event) {
        let el = event.currentTarget;
        el.classList.add('is-selected');
    }

    function handleOnMouseLeave(event) {
        let el = event.currentTarget;
        el.classList.remove('is-selected');
        props.onDataHighlight("");
    }

    return (

        <table className="table" width={props.width}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th><abbr title="B">B</abbr></th>
                    <th><abbr title="C">C</abbr></th>
                    <th><abbr title="D">D</abbr></th>
                    <th><abbr title="E">E</abbr></th>
                    <th><abbr title="F">F</abbr></th>
                    <th><abbr title="G">G</abbr></th>
                    <th><abbr title="H">H</abbr></th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map((d) =>
                    <tr
                        key={d.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                        onMouseOver={handleMouseOver}
                        data-key={d.id}
                    >
                        <td>{d.name}</td>
                        <td>{d.b}%</td>
                        <td>{d.c}</td>
                        <td>{d.d}</td>
                        <td>{d.e}</td>
                        <td>{d.f}</td>
                        <td>{d.g}</td>
                        <td>{d.h ? "Yes" : "No"}</td>
                    </tr>
                )
            }

            </tbody>
        </table>
    );
};

export {ReactTable};
