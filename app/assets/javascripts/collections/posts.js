PictureApp.Collections.Posts = Backbone.Collection.extend({
	model: PictureApp.Models.Post,
	url: '/api/posts'
})
PictureApp.Collections.posts = new PictureApp.Collections.Posts();