class CreateNewsletters < ActiveRecord::Migration[5.2]
  def change
    create_table :newsletters do |t|
      t.string :title
      t.text :image
      t.text :link
      t.integer :index

      t.timestamps
    end
  end
end
