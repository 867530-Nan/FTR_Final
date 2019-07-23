class AddItemNumberToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :itemNumber, :integer
  end
end
