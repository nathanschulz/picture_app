


json.(@post, :id, :likes, :user_id, :filepicker_url, :string, :created_at, :updated_at, :order, :comment)
json.comments @post.comments do |comment|
  json.(comment, :body, :id, :created_at)
end
json.likes @post.likes do |like|
  json.(like, :user_id, :post_id, :username)
end


