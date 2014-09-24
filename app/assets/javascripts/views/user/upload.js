PictureApp.Views.UploadView = Backbone.View.extend({
	template: JST['user/upload'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})