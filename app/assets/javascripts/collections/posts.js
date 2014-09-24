PictureApp.Collections.Posts = Backbone.Collection.extend({
	model: PictureApp.Models.Post,
	url: '/posts'
})
PictureApp.Collections.posts = new PictureApp.Collections.Posts();