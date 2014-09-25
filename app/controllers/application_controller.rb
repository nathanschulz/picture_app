class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?, :page_id
  
  def page_id
    false
  end
  
  def current_user
    User.find_by_session_token(session[:token])
  end
  
  def logged_in?
    !!current_user
  end
  
  def login!(user)
    session[:token] = user.reset_session_token!
  end
  
  def logout!
    current_user.reset_session_token!
    session[:token] = nil
  end
  
  def redirect_if_logged_out!
    redirect_to root_url unless logged_in?
  end
  
  def redirect_if_logged_in!
    redirect_to user_url(current_user) if logged_in? 
  end
  
end
