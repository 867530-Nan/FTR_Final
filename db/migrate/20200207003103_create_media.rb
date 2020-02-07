class CreateMedia < ActiveRecord::Migration[5.2]
  def change
    create_table :media do |t|
      t.string :name
      t.text :image
      t.text :link
      t.boolean :frontPage
      t.integer :itemNumber
      t.text :description

      t.timestamps
    end
    
  end
end
