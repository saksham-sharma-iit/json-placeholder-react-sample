import React from "react";
import "./App.css";

import AppPosts from "./AppPosts.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            line: ""
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
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                this.setState({ posts: posts });
            });
    }

    render() {
        
	let postsDivs = [];

        let postDiv = null;

        for (let i = 0; i < this.state.posts.length; i++) {
            let post = this.state.posts[i];
            if (!post.body.includes(this.state.line)) {
                continue;
            }
			// console.log(user);
            postDiv = <AppPosts key = { post.id }
            		postId = {post.id}
		            Uid = { post.userId }
		            post = { post }
		            body = { post.body }
                /> ;
            postsDivs.push(postDiv);
        }

       
        return ( <
            div className = "App" > <
            input type = "text"
            onChange = {e => this.change(e.target.value) }
            /> {postsDivs.length} <br/> 
		{postsDivs} 
	    </div>
        );
    }
}

export default App;
