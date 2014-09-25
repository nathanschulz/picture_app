PictureApp.Collections.Users = Backbone.Collection.extend({
	model: PictureApp.Models.User,
	url: '/api/users',
	getOrFetch: function (id) {
		var user = this.get(id),
			users = this;
		if(!user) {
			user = new PictureApp.Models.User({id: id});
			user.fetch({
				success: function () {
					users.add(user)
				}
			});
		} else {
			user.fetch();
		}
		return user;
	}
})
PictureApp.Collections.users = new PictureApp.Collections.Users();