class CreateFitnessHeadings < ActiveRecord::Migration[5.2]
  def change
    create_table :fitness_headings do |t|
      t.string :title
      t.string :sub_title
      t.text :image

      t.timestamps
    end
  end
end
