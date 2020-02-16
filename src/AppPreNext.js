import React from "react";
import "./App.css";

import AppPosts from './AppPosts.js';

class AppPreNext extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			currentPostIndex: 0
		};	
		this.testF = this.testF.bind(this);
		this.increaseIndex = this.increaseIndex.bind(this);
		this.decreaseIndex = this.decreaseIndex.bind(this);
	}
	increaseIndex(){
		let i = this.state.currentPostIndex;
		this.setState({currentPostIndex: i + 1});
	}
	decreaseIndex(){
		let i = this.state.currentPostIndex;
		if ( i < 1){
			return;
		}
		this.setState({currentPostIndex: i-1});
	}
	testF(data){
		console.log("testF called");
		console.log(data);	
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
		  .then(response => response.json())
		  .then((posts)=>{
				this.setState({posts});
			});
	}

  render() {
	console.log("render users count:" + this.state.posts.length + " ==>" + (new Date()));
	// let postsDivs = [];

	let postDiv = null;

	if(this.state.posts.length>0 && this.state.posts.length > this.state.currentPostIndex 
			&& this.state.currentPostIndex >= 0){
		let post = this.state.posts[this.state.currentPostIndex];
		postDiv = <AppPosts 
					key={post.id} 
				 	Uid={post.userId} 
					postId={post.id}
					post={post} 
					body={post.body}  />;
	}
		// postsDivs.push(postDiv);
	// }
	// let post = this.state.posts[this.state.currentPostIndex];
    return (
      <div className="AppPreNext">
        {/* <header className="App-header">
         	<button onClick={()=>this.testF("Testing")} > Check Button </button>
        </header> */}
		{/* <button onClick={()=>} > prev </button> */}
		<button onClick={()=>this.increaseIndex()} > next </button>
		<button onClick={()=>this.decreaseIndex()} disabled={this.state.currentPostIndex==0} > prev </button>
		
		{postDiv}
		
      </div>
    );
  }
}

export default AppPreNext;
