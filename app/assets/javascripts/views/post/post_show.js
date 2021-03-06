PictureApp.Views.PostShowView = Backbone.View.extend({
  template: JST['post/show'],
  className: 'post-show',
  initialize: function () {
		this.userName = $('#current-user-id').data('current-user-name')
    this.modelId = this.model.attributes.id;
    this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model.comments(), 'add sync', this.render)
		this.listenTo(this.model.likes(), 'add remove sync', this.render)
  },
  
  events: {
    'click #make-comment' : 'makeComment',
    'click #like-post' : 'likePost',
		'click #unlike-post' : 'unlikePost',
		'click .style-button:not(.on)' : 'stylePost',
		// 'click .style-button.on' : 'unstylePost'
  },

	unstylePost: function (event) {
		// event.preventDefault();
		// console.log("unstyling")
		// var oldStyle = $(event.currentTarget).data('style');
		// var styleIndex = this.model.styleArray.indexOf(oldStyle)
		// this.model.styleArray.splice(styleIndex, 1);
		// this.updatePost();
	},

	stylePost: function (event) {
		event.preventDefault();
		console.log('styling')
		var newStyle = $(event.currentTarget).data('style');
		this.model.styleArray.push(newStyle);
		this.updatePost();
	},
	
	updatePost: function () {
		var newStyle = this.model.styleArray.join(" ");
		this.model.save({style: newStyle}, {patch: true});
	},

	
	unlikePost: function(event) {
		event.preventDefault();
		var likerId = $('#current-user-id').data('current-user-id')
		var newLike = new PictureApp.Models.Like({
			id: this.modelId
		});
		var collectionLike = this.model.likes().findWhere({user_id: likerId})
		newLike.destroy({
			success: function () {
				this.model.likes().remove(collectionLike);
			}.bind(this)
		})
		
	},
	
	likePost: function (event) {
		event.preventDefault();
		var likerId = $('#current-user-id').data('current-user-id')
		var likerName = $('#current-user-id').data('current-user-name')
		var newLike = new PictureApp.Models.Like({
			post_id: this.modelId, user_id: likerId, username: likerName
		});
		newLike.save({}, {
			success: function () {
				this.model.likes().add(newLike);
			}.bind(this)
		})
	},
  
  makeComment: function (event) {
    event.preventDefault();
    var commentBody = $('#title-input').val();
		var avatar = $('#current-user-id').data('current-user-avatar');
	  var newComment = new PictureApp.Models.Comment({
     	body: commentBody, username: this.userName, post_id: this.modelId, avatar: avatar
    });
    newComment.save({},
      {success: function () {
				this.model.comments().add(newComment);
			}.bind(this)        
     })
  },
	
	updateButtons: function () {

		if (this.model.styleArray) {
			this.model.styleArray.forEach(function(style){
	      var buttonClass = "." + style;
	      $(buttonClass).addClass('on');
	    })
		}
	},
	
  render: function () {
    var content = this.template({
			post: this.model, 
			userName: this.userName
		});
		// this.updateButtons(); these buttons should be a subview
    this.$el.html(content);
		return this;
	 }
})


