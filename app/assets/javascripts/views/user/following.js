PictureApp.Views.FollowingModal = Backbone.View.extend({
	tagname: 'p',
	template: JST['user/following'],
	// template: 'this is the modal',
	render: function () {
		var content = this.template({user: this.model})
		this.$el.html(content);
		return this;
	}
})
