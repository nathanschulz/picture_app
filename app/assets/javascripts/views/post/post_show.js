PictureApp.Views.PostShowView = Backbone.View.extend({
  template: JST['post/show'],
  initialize: function (options) {
    this.postId = options.postId;
  },
  render: function () {
    var content = this.template({postId: this.postId});
    this.$el.html(content);
    return this;
  }
})