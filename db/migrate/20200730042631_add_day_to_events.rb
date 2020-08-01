class AddDayToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :day, :integer
  end
end
