PictureApp.Views.PostShowView = Backbone.View.extend({
  template: JST['post/show'],
  className: 'post-show',
  initialize: function () {
    this.modelId = this.model.attributes.id;
    this.listenTo(this.model, 'sync', this.render);
    // $('body').on('click', '#make-comment', this.makeComment.bind(this));
  },
  
  events: {
    'click #make-comment' : 'makeComment',
    'click #close-modal' : 'closeModal'
  },
  
  closeModal: function () {
    $('div#show-view').css("display", "none")
    this.remove();
  },
  
  
  makeComment: function (event) {
    event.preventDefault();
    debugger
    var commentBody = $('#title-input').val();
    var newComment = new PictureApp.Models.Comment({
      comment: {body: commentBody, post_id: this.modelId}
    });
    newComment.save({},
      {success: function () {
        alert('congratulations!')
      }})
  },
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
})


