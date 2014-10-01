PictureApp.Views.UploadModal = Backbone.View.extend({
	template: JST['upload/upload'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}	
	
})