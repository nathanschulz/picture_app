class Api::ReceivedMessagesController < ApplicationController
  def index
    render json: current_user.received_messages
  end
  
  def show
    @message = Message.find(params[:id])
    render json: @message
  end  
  
  def update
    @message = Message.find(params[:id])
    @message.update(message_params)
    render json: @message
  end
  
  private
  def message_params
    params.require(:message).permit(:sender_id, :title, :body, :is_follow_request?, :unread?)
  end
    
end
