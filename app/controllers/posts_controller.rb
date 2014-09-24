class PostsController < ApplicationController
  
  def index
    render json: current_user.posts
  end
  
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def create
    post = current_user.posts.new(post_params)
    
    if post.save
      render json: post
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
