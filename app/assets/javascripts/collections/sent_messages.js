PictureApp.Collections.SentMessages = Backbone.Collection.extend({
	model: PictureApp.Models.SentMessage,
	url: '/api/messages'	
})
PictureApp.Collections.sentMessages = new PictureApp.Collections.SentMessages();