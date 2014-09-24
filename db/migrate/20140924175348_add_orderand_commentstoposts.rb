class AddOrderandCommentstoposts < ActiveRecord::Migration
  def change
    add_column :posts, :comment, :text
    add_column :posts, :order, :float
  end
end
