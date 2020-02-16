import React from "react";
import "./App.css";

import AppPosts from './AppPosts.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: {},
            line: ''
        };
        this.testF = this.testF.bind(this);
        this.change = this.change.bind(this);
    }

    change(str) {
        this.setState({ line: str });
    }

    testF(data) {
        console.log("testF called");
        console.log(data);
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => {
                this.setState({ posts: posts });
            });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => {
                console.log(JSON.stringify(users));
                let usersMap = {};
                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    usersMap[user.id] = user;
                }
                this.setState({ users: usersMap });
            });
    }

    render() {
        //console.log("render users count:" + this.state.posts.length + " ==>" + (new Date()));
        let postsDivs = [];

        let postDiv = null;

        for (let i = 0; i < this.state.posts.length; i++) {
            let post = this.state.posts[i];
            let user = this.state.users[post.userId];
            //let user = a.get(post.userId);

            if (!post.body.includes(this.state.line))
                continue;
            postDiv = < AppPosts
            key = { post.id }
            Uid = { post.userId }
            post = { post }
            body = { post.body }
            user = { user }
            />;
            postsDivs.push(postDiv);
        }

        // postsDivs.push(postDiv);
        return ( <
            div className = "App" > {
                /* <header className="App-header">
                         	<button onClick={()=>this.testF("Testing")} > Check Button </button>
                        </header> */
            } { /* <button onClick={()=>} > prev </button> */ } <
            input type = 'text'
            onChange = {
                (e) => this.change(e.target.value) }
            />

            { postsDivs.length } <
            br / > { postsDivs }

            <
            /div>
        );
    }
}

export default App;
