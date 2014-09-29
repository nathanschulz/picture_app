PictureApp.Views.FollowersModal = Backbone.View.extend({
	tagname: 'p',
	template: 'this is the modal',
	render: function () {
		this.$el.html(this.template);
		return this;
	}
	
})
