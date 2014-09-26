class Api::ReceivedMessagesController < ApplicationController
  def index
    render json: current_user.received_messages
  end
  
  def show
    @message = Message.find(params[:id])
    render json: @message
  end
    
end
