PictureApp.Routers.Main = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	routes: {
		'' : 'index'
	},
	
	index: function () {
		PictureApp.Collections.posts.fetch();
		var indexView = PictureApp.Views.IndexView({
			collection: PictureApp.Collections.posts
		});
		this._swapView(indexView);		
	},
	
	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
})