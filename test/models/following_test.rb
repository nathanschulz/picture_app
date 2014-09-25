# == Schema Information
#
# Table name: followings
#
#  id          :integer          not null, primary key
#  follower_id :integer
#  followee_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class FollowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
