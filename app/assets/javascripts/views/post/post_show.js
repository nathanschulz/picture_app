PictureApp.Views.PostShowView = Backbone.View.extend({
  template: JST['post/show'],
  initialize: function () {
  },
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
})