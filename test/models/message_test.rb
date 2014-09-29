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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
