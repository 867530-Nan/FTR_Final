class CreateFitnesses < ActiveRecord::Migration[5.2]
  def change
    create_table :fitnesses do |t|
      t.string :title
      t.string :sub_title
      t.text :body
      t.string :index
      t.text :image

      t.timestamps
    end
  end
end
