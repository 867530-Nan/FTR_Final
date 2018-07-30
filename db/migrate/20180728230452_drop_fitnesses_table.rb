class DropFitnessesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :fitnesses
  end
end
