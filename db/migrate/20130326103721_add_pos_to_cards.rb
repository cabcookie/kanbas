class AddPosToCards < ActiveRecord::Migration
  def change
    add_column :cards, :posX, :float
    add_column :cards, :posY, :float
  end
end
