PictureApp.Views.IndexView = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render)
	},
	tagName: 'ul',
	template: JST['user/index'],
	render: function () {
		var content = this.template({posts: this.collection});
		this.$el.html(content);
		return this;
	}
})

//subview for individual pictures