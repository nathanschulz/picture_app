class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.string :username
      t.integer :user_id
      t.integer :post_id
      t.timestamps
    end
    add_index :likes, [:user_id, :post_id], unique: true
  end
end
