PictureApp.Collections.Posts = Backbone.Collection.extend({
	model: PictureApp.Models.Post,
	url: '/api/posts',
	getOrFetch: function (id) {
		var post = this.get(id),
			posts = this;
		if(!post) {
			post = new PictureApp.Models.Post({id: id});
			post.fetch({
				success: function () {
					posts.add(post)
				}
			});
		} else {
			post.fetch();
		}
		return post;
	}
})
PictureApp.Collections.posts = new PictureApp.Collections.Posts();




this.collection.fetch({
	remove: false,
	data: {page: 1}
})


// parse: function(response) {
// 	this.page = response.page;
// 	this.total_pages = response.total_pages;
// 	return response.models;
// }