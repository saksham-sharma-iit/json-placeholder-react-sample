import React from "react";

class AppComments extends React.Component {
    render() {
        return ( <
            div style = {
                { margin: "10px", padding: "10px", border: "1px dashed red" } } >
            <
            p style = {
                { color: "red" } } > { this.props.comment.name }({ this.props.comment.email }) <
            /p> <
            br / >
            <
            p > { this.props.body } <
            /p>

            <
            /div>
        );
    }
}

export default AppComments;
