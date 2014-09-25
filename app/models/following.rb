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

class Following < ActiveRecord::Base
  
  belongs_to(
  :followee,
  primary_key: :id,
  foreign_key: :followee_id,
  class_name: "User"
  )
  
  belongs_to(
  :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: "User"
  )
  
  
end
