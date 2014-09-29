class Api::FollowersController < ApplicationController
  
  def index
    # render json: current_user.followers
  end

  def show
    render json: Following.find_by_follower_id(params[:id])
  end  
  
end
