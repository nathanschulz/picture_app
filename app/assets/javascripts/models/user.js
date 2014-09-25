PictureApp.Models.User = Backbone.Model.extend({
	urlRoot: '/api/users',
	posts: function(){
		if (!this._posts){
			this._posts = new PictureApp.Collections.Posts();
		}
		return this._posts;
	},
	parse: function(resp){
		if(resp.posts){
			this.posts().set(resp.posts);
			delete resp.posts;
		}
		return resp;
	}
})