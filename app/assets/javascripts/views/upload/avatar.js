PictureApp.Views.ProfileModal = Backbone.View.extend({
	template: JST['upload/profile'],
	events: {
		'click #select-picture' : 'makePost'
	},
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	makePost: function () {
		event.preventDefault();
		var userId = $('#user-id').data('user-id');
		var path = filepicker.pick(function(InkBlob){
			 $('#picture-url').val(InkBlob.url);
			 $('#select-picture').html('Load Successful');
			 $('#select-picture').attr("disabled", true);
		})
    Backbone.history.navigate('', {trigger: true});
	},
	
})