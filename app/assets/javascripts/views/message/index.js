PictureApp.Views.MessageIndex = Backbone.View.extend({
	template: JST['message/index'],
	
	events: {
		'click #close-messages' : 'closeMessages',
		'click .delete-message' : 'deleteMessage',
		'click #send-message' : 'sendMessage',
	},
	
	deleteMessage: function () {
		debugger
	},
	
	showMessage: function (event) {
		var thing = $(event.currentTarget)
		var messageId = $(event.currentTarget).data('id')
		this.viewedMessage = this.collection.get(messageId) || this.sentMessages.get(messageId);
		this.messageView = new PictureApp.Views.MessageShow({model: this.viewedMessage});
		$('#view-message').html(this.messageView.render().$el);
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
		var that = this
		newMessage.save({}, {
			success: function() {
				that.sentMessages.add(newMessage);
			}
		})
	},
	
	initialize: function (options) {
		this.sentMessages = options.sentMessages;
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.sentMessages, 'sync', this.render);
		this.$el.on('click', '.content-toggle', this.handleToggle.bind(this));
	},
	
	handleToggle: function (event) {
		event.preventDefault();
		if (this.messageView) {
			this.viewedMessage.save({message: {'unread?': false}}, {patch: true});
			this.viewedMessage = null;
			this.messageView.remove();
			this.messageView = null;
		}
		var desiredContent = $(event.currentTarget).data('name');
		$('.middle-pane').removeClass('being-viewed');
		$(desiredContent).addClass('being-viewed');
		if ($(event.currentTarget).hasClass('for-message')) {
			this.showMessage(event);
		}		
	},
	
  
  closeMessages: function () {
    $('div#messages-view').css("display", "none");
		this.messageView && this.messageView.remove();
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