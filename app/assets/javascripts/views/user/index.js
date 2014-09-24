PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},
  
  events: {
    'click .thumbnail' : 'postShow'
  },
  
  postShow: function (event) {
    var picSpot = $('#picture-goes-here');
    var postId = $(event.currentTarget).data('id')
    var postUrl = this.collection.get(postId).attributes.filepicker_url
    picSpot.html('<img src="' + postUrl + '" alt="500x500">');
  },
   
	
	render: function () {
		var content = this.template({posts: this.collection});
		this.$el.html(content);
		return this;
	}
})

//subview for individual pictures