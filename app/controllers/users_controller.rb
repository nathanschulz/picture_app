class UsersController < ApplicationController
  
  def new
  end
  
  def create
    @user = User.new(user_params)
    @user.password = params[:password]
    
    if @user.save
      login!(@user)
      redirect_to user_url(@user) 
    else
      flash[:errors] = [@user.errors.full_messages]
      redirect_to new_session_url
    end
  end
  
  def show
    @post = Post.new
    @posts = current_user.posts
  end
  
  def destroy
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
  
end
