


json.(@user, :id, :created_at, :updated_at, :username)
json.posts @user.posts do |post|
  json.(post, :id, :user_id, :filepicker_url, :string, :created_at, :updated_at, :order, :comment)
end


