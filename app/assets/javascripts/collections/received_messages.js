PictureApp.Collections.ReceivedMessages = Backbone.Collection.extend({
	model: PictureApp.Models.ReceivedMessage,
	url: '/api/received_messages',
	comparator: function (model) {
		return -(new Date(model.get('created_at'))).getTime();
	}	
})
PictureApp.Collections.receivedMessages = new PictureApp.Collections.ReceivedMessages();