class Api::LikesController < ApplicationController
  
  def show
    @like = Like.find(params[:id])
    render json: @like
  end
  
  def index
    render json: Like.all
  end
  
  def create
  end
  
  def destroy
  end  
  
end
