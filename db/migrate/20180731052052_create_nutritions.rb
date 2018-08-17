class CreateNutritions < ActiveRecord::Migration[5.2]
  def change
    create_table :nutritions do |t|
      t.string :title
      t.string :sub_title
      t.text :body
      t.integer :index
      t.text :image

      t.timestamps
    end
  end
end
