class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.string :date
      t.text :body
      t.text :image
      t.text :link
      t.text :link_text

      t.timestamps
    end
  end
end
