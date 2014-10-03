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

require 'wikipedia'

class Post < ActiveRecord::Base
    
  validates :filepicker_url, presence: true
  validates :user_id, presence: true
  
  before_create :create_photo_description
  belongs_to :user
  has_many :comments
  has_many :likes
  
  
  def create_photo_description
    self.title = self.comment
    page = Wikipedia.find(self.comment).sanitized_content

    if page
      paragraph_ending = page.index('</p>')
      self.comment = page[3...paragraph_ending]
    else
      self.comment = "No article found."
    end

  end
  
end
