PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
	  this.listenTo(this.collection, 'sync', this.render);
    
	},
  
  events: {
    'click .thumbnail' : 'postShow'
  },
  
  postShow: function (event) {
    event.preventDefault();
    
    var picSpot = this.$('#show-view');
    
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    // post.fetch();
    var modalView = new PictureApp.Views.PostShowView({
      model: post
    });
    picSpot.html(modalView.render().$el);
    this.$('div#show-view').css("display", "block")
  },
	
	render: function () {
		var content = this.template({posts: this.collection});
		this.$el.html(content);
   
		return this;
	}
})

//subview for individual pictures