var services = {

	usersMap: {},
	
	getUser: function(userId, callback){
		if(services.usersMap[userId] !== undefined){
			console.log("Returing user from cache");
			callback(services.usersMap[userId]);
			return;
		}
		if(localStorage !== undefined){
			let user = localStorage.getItem("user:" + userId);
			if(user){
				console.log("Returing user from browser cache");
				user = JSON.parse(user);
        		services.usersMap[userId] = user; 
				callback( user );
				return;
			}
		}
		console.log("fetching user " + userId);
		fetch(
			"https://jsonplaceholder.typicode.com/users/" + userId)
        .then(response => response.json())
        .then(user => {
        		services.usersMap[userId] = user; 
				if(localStorage !== undefined){
	        		localStorage.setItem("user:"+ userId, JSON.stringify(user) );
	        	}
        		callback(user);
        	});

	},
	
	getPosts: function(callback){
		fetch('https://jsonplaceholder.typicode.com/posts')
		  .then(response => response.json())
		  .then((posts)=>{
				callback(posts);
			});
	},
	
	getPostsFromUser: function(userId, callback){
		fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId)
		  .then(response => response.json())
		  .then((posts)=>{
				callback(posts);
			});
	},
	
	getComments: function(postId, callback){
		console.log("fetching comments " + postId);
		
		fetch(
			"https://jsonplaceholder.typicode.com/comments?postId=" + postId)
        .then(response => response.json())
        .then(comments => {
        		callback(comments); 
        	});
	},

};

export default services;
