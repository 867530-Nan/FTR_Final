class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :title
      t.text :image
      t.text :bio
      t.integer :index

      t.timestamps
    end
  end
end
