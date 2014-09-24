# == Schema Information
#
# Table name: posts
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  filepicker_url :string(255)
#  string         :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#  comment        :text
#  order          :float
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
