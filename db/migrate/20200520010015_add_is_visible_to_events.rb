class AddIsVisibleToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :isVisible, :boolean
  end
end
