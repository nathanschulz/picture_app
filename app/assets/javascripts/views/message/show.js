PictureApp.Views.MessageShow = Backbone.View.extend({
	template: JST['message/show'],
	render: function () {
		var content = this.template({message: this.model});
		this.$el.html(content);
		return this;		
	}
	
})