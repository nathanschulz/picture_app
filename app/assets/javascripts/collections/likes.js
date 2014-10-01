PictureApp.Collections.Likes = Backbone.Collection.extend({
	url: '/api/likes',
	model: PictureApp.Models.Like,
  initialize: function(models, options) {
    if (options) {
      this.post = options.post;
    }
  },
	comparator: function (model) {
		return -(new Date(model.get('created_at'))).getTime();
	}	
})