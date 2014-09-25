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
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
