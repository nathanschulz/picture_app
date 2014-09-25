class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.string :title
      t.integer :sender_id, null: false
      t.integer :sendee_id, null: false
      t.boolean :is_follow_request?, default: false
      t.timestamps
    end
  end
end
