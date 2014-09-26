class Api::MessagesController < ApplicationController
  
  def index
    render json: current_user.sent_messages
  end
  
  
  def create
    @message = Message.new(message_params)
    @user = User.find_by_username(params[:message][:sendee_id])
    @message.sender_name = @user.username
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
    params.require(:message).permit(:sender_id, :title, :body, :is_follow_request?)
  end
end
