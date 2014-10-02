class Api::PostsController < ApplicationController
  
  def show
    @post = Post.find(params[:id])
    render :show
  end
  
  def create
    post = current_user.posts.new(post_params)
    
    if post.save
      render json: post
      # redirect_to user_url(current_user.username)
    else
      flash[:errors] = post.errors.full_messages
      redirect_to user_url(current_user.username)
    end
  end
  
  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end
  
  private
  def post_params
    params.require(:post).permit(:filepicker_url, :comment, :style)
  end
  
end
