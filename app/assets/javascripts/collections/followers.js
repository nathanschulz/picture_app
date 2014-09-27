PictureApp.Collections.Followers = Backbone.Collection.extend({
	model: PictureApp.Models.Follower,
	url: '/api/followers'
})