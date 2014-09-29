# == Schema Information
#
# Table name: messages
#
#  id                 :integer          not null, primary key
#  body               :text             not null
#  title              :string(255)
#  sender_id          :integer          not null
#  sendee_id          :integer          not null
#  is_follow_request? :boolean          default(FALSE)
#  created_at         :datetime
#  updated_at         :datetime
#  sender_deleted?    :boolean          default(FALSE)
#  recipient_deleted? :boolean          default(FALSE)
#  sender_name        :string(255)
#  recipient_name     :string(255)
#  unread?            :boolean          default(TRUE)
#

class Message < ActiveRecord::Base
  validates :body, presence: true
  validates :sender_id, presence: true
  validates :sendee_id, presence: true
  
  belongs_to(
    :sender,
    primary_key: :id,
    foreign_key: :sender_id,
    class_name: "User"
  )
    
  belongs_to(
    :sendee,
    primary_key: :id,
    foreign_key: :sendee_id,
    class_name: "User")
  
  
end
