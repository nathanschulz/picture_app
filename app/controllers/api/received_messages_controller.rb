class Api::ReceivedMessagesController < ApplicationController
  def index
    render json: current_user.received_messages
  end  
end
