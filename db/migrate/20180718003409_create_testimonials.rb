class CreateTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :testimonials do |t|
      t.string :subject
      t.string :date
      t.string :author
      t.text :body

      t.timestamps
    end
  end
end
