


json.(@user, :id, :created_at, :updated_at, :username, :avatar)
json.posts @user.posts do |post|
  json.(post, :id, :user_id, :filepicker_url, :string, :created_at, :updated_at, :order, :comment)
end

json.followers @user.followers.count
json.followeds @user.followeds.count

json.all_followers @user.followers do |follower|
  json.(follower, :username, :avatar)
end

json.all_followeds @user.followeds do |followed|
  json.(followed, :username, :avatar)
end