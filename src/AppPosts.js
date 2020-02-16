import React from "react";
import "./App.css";

import AppComments from "./AppComments.js";

class AppPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        fetch(
                "https://jsonplaceholder.typicode.com/comments?postId=" + this.props.postId)
            .then(response => response.json())
            .then(comments => {
                this.setState({ comments });
            });
    }

    render() {
        let usersRows = this.state.comments.map(comment => ( <
            AppComments Uid = { comment.id }
            key = { comment.id }
            comment = { comment }
            body = { comment.body }
            />
        ));


        return ( <
            div className = { "posts" } >
            <
            p style = {
                { font: "Arial" } } >
            <
            i > { this.props.post.id } { this.props.user.name } { '(' + this.props.user.email + ')' } <
            /i> <
            /p> <
            p style = {
                { font: "Arial" } } >
            <
            i > { this.props.body } <
            /i> <
            /p> <
            br / >
            <
            hr / >
            <
            br / > { usersRows } <
            /div>
        );
    }
}

export default AppPosts;