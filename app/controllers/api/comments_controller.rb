class Api::CommentsController < ApplicationController

  def index
    
    render json: Comment.all
  end

  def create
    comment = current_user.comments.new(comment_params)
    
    if comment.save
      render json: comment
    else
      # flash[:errors] = post.errors.full_messages
      render json: post.errors.full_messages
    end
    
    
  end
  
  private
  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
  
  
end
