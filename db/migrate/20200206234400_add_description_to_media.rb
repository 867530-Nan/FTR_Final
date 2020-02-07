class AddDescriptionToMedia < ActiveRecord::Migration[5.2]
  def change
    add_column :media, :description, :text, default: ""
  end
end
