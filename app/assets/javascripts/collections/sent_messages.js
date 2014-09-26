PictureApp.Collections.SentMessages = Backbone.Collection.extend({
	model: PictureApp.Models.SentMessage,
	url: '/api/messages',
	comparator: function (model) {
		return -(new Date(model.get('created_at'))).getTime();
	}		
})
PictureApp.Collections.sentMessages = new PictureApp.Collections.SentMessages();