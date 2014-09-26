class Addcolumnstomessages < ActiveRecord::Migration
  def change
    add_column :messages, :sender_deleted?, :boolean, default: false
    add_column :messages, :recipient_deleted?, :boolean, default: false
  end
end
