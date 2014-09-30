class Like < ActiveRecord::Base
  
  validates :user_id, :post_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:post_id]
  
  belongs_to :post
  belongs_to :user
  
end
