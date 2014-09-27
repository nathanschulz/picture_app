class Api::FollowersController < ApplicationController
  
  def index
    render json: current_user.followers
  end
  
end
