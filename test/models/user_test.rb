# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  session_token   :string(255)      not null
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
