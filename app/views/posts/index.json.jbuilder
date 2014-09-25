


json.posts current_user.posts do |post|
  json.(post, :id, :user_id, :filepicker_url, :string, :created_at, :updated_at, :order, :comment)
  json.comments post.comments do |comment|
    json.(comment, :body, :id)
  end
end