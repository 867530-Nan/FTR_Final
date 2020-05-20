class AddNameToMedia < ActiveRecord::Migration[5.2]
  def change
    add_column :media, :name, :text
  end
end
