class Api::LikesController < ApplicationController
  
  def show
    @like = Like.find(params[:id])
    render json: @like
  end
  
  def index
    render json: Like.all
  end
  
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages
    end
  end
  
  def destroy
    @like = Like.where(post_id: params[:id], username: current_user.username)
    @like.destroy_all
    render json: @like
  end
  
  private
  def like_params
    params.require(:like).permit(:username, :user_id, :post_id)
  end  
  
end
