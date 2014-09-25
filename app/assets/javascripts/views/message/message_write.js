PictureApp.Views.MessageWrite = Backbone.View.extend({
	template: JST['message/write'],
  
  events: {
    'click #send-message' : 'sendMessage',
    'click #close-message' : 'closeMessage'
  },
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
  
  closeMessage: function () {
    $('div#new-message-view').css("display", "none")
    this.remove();
  },
	
	sendMessage: function () {
		event.preventDefault();
		var messageBody = $('#message-body').val();
		var messageRecipient = $('#message-recipient').val();
		var messageSubject = $('#message-subject').val();
		var sender = $('#current-user-id').data('current-user-id');
		var newMessage = new PictureApp.Models.Message({
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
		this.closeMessage();
	}
  
})