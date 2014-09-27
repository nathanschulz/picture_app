class Api::FollowingsController < ApplicationController
  
  def create    
    
    if current_user.id == following_params[:follower_id]
      @following = Following.new(following_params)
      if @following.save
        render json: @following
      else
        render json: "What are you trying to game?"
      end
    else
      render json: "You can't game the system"
    end
    
  end
  
  
  def destroy
    @following = Following.find_by(followee_id: params[:id])
    @following.destroy
    render json: @following      
  end
  
  
  private
  def following_params
    params.require(:following).permit(:follower_id, :followee_id)
  end
  
end
