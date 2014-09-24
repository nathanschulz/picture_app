class Post < ActiveRecord::Base
  
  validates :filepicker_url, presence: true
  validates :user_id, presence: true
  
  belongs_to :user
  
end
