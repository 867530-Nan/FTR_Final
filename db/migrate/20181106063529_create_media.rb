class CreateMedia < ActiveRecord::Migration[5.2]
  def change
    create_table :media do |t|
      t.text :image
      t.text :link
      t.boolean :frontPage
      t.text :link_text
      t.integer :itemNumber
      t.text :description

      t.timestamps
    end
  end
end