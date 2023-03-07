class UpdateOrdersTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :customer_id
    remove_column :orders, :item_id
  end
end
