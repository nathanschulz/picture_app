class Api::UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
  end
  
  def index
    render json: User.all
  end
  
  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to user_url(@user.username)
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
  
end
