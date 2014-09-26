PictureApp.Views.MessageIndex = Backbone.View.extend({
	template: JST['message/index'],
	
	events: {
		'click #close-messages' : 'closeMessages',
		'click .delete-message' : 'deleteMessage'
	},
	
	deleteMessage: function () {
		event.preventDefault();
	},
	
	initialize: function (options) {
		this.sentMessages = options.sentMessages;
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.sentMessages, 'sync', this.render);
	},
	
  
  closeMessages: function () {
    $('div#messages-view').css("display", "none")
    this.remove();
  },
	
	render: function () {
		var content = this.template({
			receivedMessages: this.collection,
			sentMessages: this.sentMessages
		});
		
		this.$el.html(content);
		return this;
	},
	
	
	
})