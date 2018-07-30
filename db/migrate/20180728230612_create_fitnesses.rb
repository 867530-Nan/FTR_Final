class CreateFitnesses < ActiveRecord::Migration[5.2]
  def change
    create_table :fitnesses do |t|
      t.string :title
      t.text :main_image
      t.text :body
      t.integer :index
      t.text :image

      t.timestamps
    end
  end
end
