PictureApp.Routers.Main = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	routes: {
		'' : 'index',
		'upload' : 'upload',
	},

	upload: function () {
		var path = filepicker.pick(function(InkBlob){
			var newPicture = new PictureApp.Models.Post({
				post: {filepicker_url: InkBlob.url}
			});
			newPicture.save({}, {
				success: function () {
					alert('congratulations!');
				}
			})
		})
    Backbone.history.navigate('', {trigger: true});
	},
	
	index: function () {
    // PictureApp.Collections.posts.fetch();
    var indexView = new PictureApp.Views.IndexView({
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