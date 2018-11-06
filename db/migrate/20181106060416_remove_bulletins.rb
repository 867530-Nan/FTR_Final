class RemoveBulletins < ActiveRecord::Migration[5.2]
  def down
    remove_column :bulletins
  end
end
