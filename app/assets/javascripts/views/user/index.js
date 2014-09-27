PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
		$('body').on('click', '#message-button', this.sendMessage.bind(this));
		$('body').on('click', '#read-messages-button', this.readMessages.bind(this));
	},
  
  events: {
    'click .thumbnail' : 'postShow',
	},
	
	readMessages: function () {
		PictureApp.Collections.receivedMessages.fetch();
		PictureApp.Collections.sentMessages.fetch();		
		var messageView = new PictureApp.Views.MessageIndex({
			collection: PictureApp.Collections.receivedMessages,
			sentMessages: PictureApp.Collections.sentMessages
		});
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
    
    var picSpot = this.$('#show-view');
    
    var postId = $(event.currentTarget).data('id');
    // var post = this.collection.get(postId);
    var post = PictureApp.Collections.posts.getOrFetch(postId);
    var modalView = new PictureApp.Views.PostShowView({
      model: post
    });
    picSpot.html(modalView.render().$el);
    this.$('div#show-view').css("display", "block")
  },
	
	render: function () {
		var content = this.template({user: this.model});
		this.$el.html(content);
   	return this;
	}
})

//subview for individual pictures