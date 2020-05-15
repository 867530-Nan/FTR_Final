class AddSubtitleToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :subtitle, :string
  end
end
