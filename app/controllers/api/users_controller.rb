class Api::UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
  end
  
  def index
    render json: User.all
  end
  
end
