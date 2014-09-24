PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},
  
  events: {
    'click .thumbnail' : 'postShow'
  },
  
  postShow: function (event) {
    var picSpot = $('#show-view');
    
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    
    var modalView = new PictureApp.Views.PostShowView({
      model: post
    });
      
    picSpot.html(modalView.render().$el);
        
  },
   
	
	render: function () {
		var content = this.template({posts: this.collection});
		this.$el.html(content);
		return this;
	}
})

//subview for individual pictures