class AddSubheaderToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :subheader, :integer
  end
end
