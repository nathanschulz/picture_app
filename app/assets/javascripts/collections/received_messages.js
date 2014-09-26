PictureApp.Collections.ReceivedMessages = Backbone.Collection.extend({
	model: PictureApp.Models.ReceivedMessage,
	url: '/api/received_messages'	
})
PictureApp.Collections.receivedMessages = new PictureApp.Collections.ReceivedMessages();