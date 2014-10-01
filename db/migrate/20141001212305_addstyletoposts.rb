class Addstyletoposts < ActiveRecord::Migration
  def change
    add_column :posts, :style, :string
  end
end
