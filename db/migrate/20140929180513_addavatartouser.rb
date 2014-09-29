class Addavatartouser < ActiveRecord::Migration
  def change
    add_column :users, :avatar, :string, default: "http://www.gravatar.com/avatar/f6112e781842d6a2b4636b35451401ff?s=80&d=mm&r=g"
  end
end
