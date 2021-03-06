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

class User < ActiveRecord::Base
  
  attr_reader :password
  
  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  before_validation :ensure_session_token
  
  has_many :posts
  has_many :comments
  
  has_many :likes
  
  has_many(
    :followings,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: "Following")
    
  has_many(
    :followedsings,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "Following")
    
  has_many(
    :followers,
    through: :followings,
    source: :follower)
    
  has_many(
    :followeds,
    through: :followedsings,
    source: :followee)
    
  has_many(
    :sent_messages,
    primary_key: :id,
    foreign_key: :sender_id,
    class_name: "Message")
    
  has_many(
    :received_messages,
    primary_key: :id,
    foreign_key: :sendee_id,
    class_name: "Message")
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
  
  
  
  
  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    print user
    return nil unless user
    return user if user.is_password?(password)
    return nil
   end


   def unread_messages
     self.received_messages.where(unread?: true)
   end


  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
end
