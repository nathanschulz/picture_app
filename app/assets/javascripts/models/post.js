PictureApp.Models.Post = Backbone.Model.extend({
	urlRoot: '/api/posts',
  
  comments: function () {
    if (!this._comments) {
      this._comments = new PictureApp.Collections.Comments([], {
        post: this
      });
    }
    return this._comments;
  },
	
	likes: function () {
		if (!this._likes) {
			this._likes = new PictureApp.Collections.Likes([], {
				post: this
			})
		}
		return this._likes;
	},
	
	generateStyleArray: function (styleString) {
		if (!styleString) {
			return []
		} else {
			var styleArray = styleString.split(/[ ,]+/);
			return styleArray;
		}
	},
    
  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, {parse: true});
			this.likes().set(response.likes, {parse: true});
			this.styleArray = this.generateStyleArray(this.style);
			delete response.likes;
		  delete response.comments;
    }
    return response;
  }
})