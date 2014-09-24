class PostsController < ApplicationController
  
  def create
    post = current_user.posts.new(post_params)
    
    if post.save
      redirect_to user_url(current_user)
    else
      flash[:errors] = post.errors.full_messages
      redirect_to user_url(current_user)
    end

  end
  
  private
  def post_params
    params.require(:post).permit(:filepicker_url)
  end
  
end
