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

class Post < ActiveRecord::Base
  
  validates :filepicker_url, presence: true
  validates :user_id, presence: true
  
  
  # after_commit :ensure_order
  #
  belongs_to :user
  has_many :comments
  has_many :likes
  
  # def ensure_order
 #    last_post = Post.order(:created_at).last
 #    self.order = (last_post.order ? (last_post.order + 1) : 0)
 #  end
  
end
