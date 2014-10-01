PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.posts(), 'add sync', this.render);
		$('body').on('click', '#message-button', this.sendMessage.bind(this));
		$('body').on('click', '#read-messages-button', this.readMessages.bind(this));
	},
  
  events: {
    'click .thumbnail' : 'postShow',
		'click .followers-count' : 'viewFollowers',
		'click .following-count' : 'viewFollowing',
	},

	
	viewFollowing: function (event) {
		var modalView = new PictureApp.Views.FollowingModal({model: this.model});
		var modal = new Backbone.BootstrapModal({
			content: modalView,
			title: "Following",			
			animate: true
		})
		modal.open(function() {console.log('clicked modal')});
	},

	viewFollowers: function (event) {
		var modalView = new PictureApp.Views.FollowersModal({model: this.model});
		var modal = new Backbone.BootstrapModal({
			content: modalView,
			title: "Followers",
			animate: true
		})
		modal.open(function() {console.log('clicked modal')});
	},
	
	
	readMessages: function () {
		PictureApp.Collections.receivedMessages.fetch();
		PictureApp.Collections.sentMessages.fetch();		
		var messageView = new PictureApp.Views.MessageIndex({
			collection: PictureApp.Collections.receivedMessages,
			sentMessages: PictureApp.Collections.sentMessages
		});
		$('body').css('overflow', 'hidden');
		$('div#messages-view').html(messageView.render().$el);
		$('div#messages-view').css("display", "block");	
	},
		
	sendMessage: function () {
		event.preventDefault();		
		var messageView = new PictureApp.Views.MessageWrite();		
		$('div#new-message-view').html(messageView.render().$el);
		$('div#new-message-view').css("display", "block");		
	},
	
	postShow: function (event) {
		event.preventDefault();
		var postId = $(event.currentTarget).data('id');
		var post = PictureApp.Collections.posts.getOrFetch(postId);		
		var modalView = new PictureApp.Views.PostShowView({model: post});
		var modal = new Backbone.BootstrapModal({
			content: modalView,
			title: "",
			animate: true
		})
		modal.open(function() {console.log('clicked modal')});
	},
	
	render: function () {
		var content = this.template({user: this.model});
		this.$el.html(content);
		// this.infiniScroll = new Backbone.InfiniScroll(this.model.posts(), {success: this.appendRender});
   	return this;
	}
})

//subview for individual pictures