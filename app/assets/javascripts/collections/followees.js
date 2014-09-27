PictureApp.Collections.Followees = Backbone.Collection.extend({
	model: PictureApp.Models.Followee,
	url: '/api/followees'
})