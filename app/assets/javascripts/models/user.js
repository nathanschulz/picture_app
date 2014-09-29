PictureApp.Models.User = Backbone.Model.extend({
	urlRoot: '/api/users',
	posts: function(){
		if (!this._posts){
			this._posts = new PictureApp.Collections.Posts();
		}
		return this._posts;
	},
	//
	// followers: function(){
	// 	if (!this._followers){
	// 		this._followers = new PictureApp.Collections.Followers();
	// 	}
	// 	return this._followers;
	// },
	//
	// followess: function(){
	// 	if (!this._followees){
	// 		this._followees = new PictureApp.Collections.Followees();
	// 	}
	// 	return this._followees;
	// },
	
	
	parse: function(resp){
		if(resp.posts){
			this.posts().set(resp.posts);

			this.followers = resp.all_followers;
			
			delete resp.posts;
			delete resp.all_followers;
			// delete resp.followees;
		}
		return resp;
	}
})