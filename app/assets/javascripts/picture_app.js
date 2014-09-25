window.PictureApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		filepicker.setKey('A2KqNetbBTzyDxWFrOclSz')
 		new PictureApp.Routers.Main({
		  	$rootEl: $('div.container')
		  })
		
		Backbone.history.start();
  }
};

$(document).ready(function(){
  PictureApp.initialize();
});
