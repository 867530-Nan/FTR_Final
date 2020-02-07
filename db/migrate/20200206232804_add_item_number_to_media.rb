class AddItemNumberToMedia < ActiveRecord::Migration[5.2]
  def change
    add_column :media, :itemNumber, :integer, default: 1
  end
end