class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.text :image
      t.datetime :finished_at

      t.timestamps
    end
  end
end
