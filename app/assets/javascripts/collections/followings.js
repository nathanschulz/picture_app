PictureApp.Collections.Followings = Backbone.Collection.extend({
	model: PictureApp.Models.Following,
	url: '/api/followings'
})