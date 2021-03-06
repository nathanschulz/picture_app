class SessionsController < ApplicationController
  
  before_filter :redirect_if_logged_in!, except: [:destroy]
  
  def new
  end
  
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password])
    if @user
      login!(@user)
      flash[:notifications] = ["You have #{@user.unread_messages.count} unread messages."]
      redirect_to user_url(@user.username)
    else
      flash.now[:notifications] = ['Invalid Credentials']
      render :new
    end    
  end
  
  
  def destroy
    logout!
    redirect_to root_url
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
