class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :filepicker_url, :string
      t.timestamps
    end
  end
end
