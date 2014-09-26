PictureApp.Views.PostShowView = Backbone.View.extend({
  template: JST['post/show'],
  className: 'post-show',
  initialize: function () {
    this.modelId = this.model.attributes.id;
    this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model.comments(), 'sync', this.render)
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
    var commentBody = $('#title-input').val();
    var newComment = new PictureApp.Models.Comment({
      comment: {body: commentBody, post_id: this.modelId}
    });
		var that = this;
    newComment.save({},
      {success: function () {
				this.model.comments().add(newComment);
			}.bind(this)        
     })
  },
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
})


