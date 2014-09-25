PictureApp.Collections.Comments = Backbone.Collection.extend({
  model: PictureApp.Models.Post,
  url: '/api/comments',
  initialize: function(models, options) {
    if (options) {
      this.post = options.post;
    }
  }
})