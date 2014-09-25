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
