class Api::MessagesController < ApplicationController
  
  def index
    render json: current_user.sent_messages
  end
  
  
  def create
    @message = Message.new(message_params)
    if params[:message][:sendee_id].is_a?(Integer)
      @user = User.find(params[:message][:sendee_id])
      @message.recipient_name = @user.username
    else
      @user = User.find_by_username(params[:message][:sendee_id])
      @message.recipient_name = params[:message][:sendee_id]
    end    
    @message.sender_name = current_user.username
    @message.sendee_id = @user.id
    if @message.save
      render json: @message
    else
      render json: "you fucked up!"
    end
  end
  
  def show
    @message = Message.find(params[:id])
    render json: @message
  end
  
  
  private
  def message_params
    params.require(:message).permit(:sender_id, :title, :body, :is_follow_request?, :unread?)
  end
end
