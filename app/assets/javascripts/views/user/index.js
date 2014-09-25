PictureApp.Views.IndexView = Backbone.View.extend({
	template: JST['user/index'],
  
  initialize: function () {
    // this.myFetch(this.collection);
    var that = this
    this.collection.fetch({
      success: function () {
        that.render()
      }})
    
    this.listenTo(this.collection, 'myFetch', this.render);
    
	},
  
  myFetch: function(collection) {
    collection.fetch();
  },
  
  events: {
    'click .thumbnail' : 'postShow'
  },
  
  postShow: function (event) {
    event.preventDefault();
    
    var picSpot = this.$('#show-view');
    
    var postId = $(event.currentTarget).data('id');
    var post = this.collection.get(postId);
    post.fetch();
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