class UpdateItemsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :restaurant_id, :integer
  end
end
