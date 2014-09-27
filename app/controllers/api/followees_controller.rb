class Api::FolloweesController < ApplicationController
  def index
    render json: current_user.followeds
  end
end
