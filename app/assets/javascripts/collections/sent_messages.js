PictureApp.Collections.SentMessages = Backbone.Collection.extend({
	model: PictureApp.Models.Message,
	url: '/api/messages'	
})
PictureApp.Collections.sentMessages = new PictureApp.Collections.SentMessages();