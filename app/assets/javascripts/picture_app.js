window.PictureApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var router = new PictureApp.Routers.Main({
  		$rootEl: $('div.main')
  	})
		Backbone.history.start();
  }
};

$(document).ready(function(){
  PictureApp.initialize();
});
