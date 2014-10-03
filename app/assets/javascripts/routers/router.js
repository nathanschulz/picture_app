PictureApp.Routers.Main = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
		PictureApp.Collections.receivedMessages.fetch()
	},
	
	routes: {
		'' : 'index',
		'upload' : 'upload',
		'follow' : 'follow',
		'unfollow': 'unfollow',
		'avatar' : 'changeAvatar'
	},
	
	changeAvatar: function () {
		var modalView = new PictureApp.Views.ProfileModal();
		var modal = new Backbone.BootstrapModal({
			content: modalView,
			title: "New Post",
			animate: true,
			okCloses: false,
			cancelText: false,
			okText: "Make Post!" 
		});
		modal.open(function() {console.log('clicked modal')});
	
		modal.on('ok', function() {
			var userId = $('#current-user-id').data('current-user-id');  //this should be passed at backbone initialize
			if ($('#picture-url').val() !== "error") { 
				var user = PictureApp.Collections.users.getOrFetch(userId);
				user.fetch({success: function() {
					user.save({user: {avatar: $('#picture-url').val()}}, {patch: true});
					}
				})				
			}
			
		})
	},	
	
	follow: function () {
		var newFollowing = this.createNewFollowing();
		var that = this
		newFollowing.save({}, {
			success: function () {
				that.notificationMessage(followerId, followeeId);
			}
		})		
		Backbone.history.navigate('', {trigger: true})
	},
	
	createNewFollowing: function () {
		var followerId = $('#current-user-id').data('current-user-id');
		var followeeId = $('#user-id').data('user-id');
		var newFollowing = new PictureApp.Models.Following({
			following: {follower_id: followerId, followee_id: followeeId}
		});
		return newFollowing;
	},
	
	
	notificationMessage: function (followerId, followeeId) {
		var sender = $('#current-user-id').data('current-user-name');
		var followNotification = new PictureApp.Models.SentMessage({
			message: {
				body: "Hey! My name is " + sender + " and I'm now following you!",
				sender_id: followerId,
				sendee_id: followeeId,
				title: "Hello friend!"
			 }
		})
		followNotification.save({},{
			success: function () {
			}
		})
		
	},	
	
	unfollow: function () {
		var followeeId = $('#user-id').data('user-id');
		var newFollowing = new PictureApp.Models.Following({
			id: followeeId
		});
		newFollowing.destroy({}, {
			success: function () {
				// alert('congratulations');
			}
		})
		Backbone.history.navigate('', {trigger: true})
	},



	upload: function () {
		var modalView = new PictureApp.Views.UploadModal();
		var modal = new Backbone.BootstrapModal({
			content: modalView,
			title: "New Post",
			animate: true,
			okCloses: false,
			cancelText: false,
			okText: "Make Post!"
		});
		
		modal.open(function() {console.log('clicked modal')});
	
		modal.on('ok', function() {
			var userId = $('#user-id').data('user-id');
			if ($('#picture-url').val() !== "error") {
				var newPicture = new PictureApp.Models.Post({
					post: {filepicker_url: $('#picture-url').val(),
					comment: $('#picture-title').val()}
				});
				newPicture.save({}, {
					success: function () {
						PictureApp.Collections.users.getOrFetch(userId).posts().add(newPicture)
					}
				})
			}
			modal.close()
		})
	},


	upload1: function () {
		var userId = $('#user-id').data('user-id');
		var path = filepicker.pick(function(InkBlob){
			var newPicture = new PictureApp.Models.Post({
				post: {filepicker_url: InkBlob.url}
			});
			newPicture.save({}, {
				success: function () {
					PictureApp.Collections.users.getOrFetch(userId).posts().add(newPicture)
				}
			})
		})
    Backbone.history.navigate('', {trigger: true});
	},
	
	index: function () {
		var userId = $('#user-id').data('user-id');
    var user = PictureApp.Collections.users.getOrFetch(userId);
    var indexView = new PictureApp.Views.IndexView({
      model: user
    });
		
		this._swapView(indexView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
})