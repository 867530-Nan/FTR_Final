class RemoveSubheaderFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :subheader, :integer
  end
end
