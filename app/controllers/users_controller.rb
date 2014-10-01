class UsersController < ApplicationController
  
  before_filter :redirect_if_logged_out!, only: [:show]
  
  def new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      redirect_to user_url(@user.username) 
    else
      flash[:errors] = [@user.errors.full_messages]
      redirect_to new_session_url
    end
  end
  
  def show
    @page_id = params[:id]
    @user = User.find_by_username(@page_id)
  end
  
  def destroy
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
  
  
end
