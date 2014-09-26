PictureApp.Views.MessageIndex = Backbone.View.extend({
	template: JST['message/index'],
	
	events: {
		'click #close-messages' : 'closeMessages',
		'click .delete-message' : 'deleteMessage',
		'click #send-message' : 'sendMessage',
	},
	
	deleteMessage: function () {
		event.preventDefault();
	},
	
	sendMessage: function () {
		event.preventDefault();
		var messageBody = $('#message-body').val();
		var messageRecipient = $('#message-recipient').val();
		var messageSubject = $('#message-subject').val();
		var sender = $('#current-user-id').data('current-user-id');
		var newMessage = new PictureApp.Models.SentMessage({
			message: {body: messageBody, 
				sender_id: sender, 
				sendee_id: messageRecipient,
				title: messageSubject
			}
		});
		newMessage.save({}, {
			success: function() {
				alert('success!')
			}
		})
	},
	
	initialize: function (options) {
		this.sentMessages = options.sentMessages;
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.sentMessages, 'sync', this.render);
		this.$el.on('click', '.content-toggle', this.handleToggle);
	},
	
	handleToggle: function (event) {
		event.preventDefault();
		debugger
		var desiredContent = $(event.currentTarget).data('name');
		$('.middle-pane').removeClass('being-viewed');
		if ($(event.currentTarget).hasClass('for-message')) {

		}
		$(desiredContent).addClass('being-viewed');
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