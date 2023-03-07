class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.string :delivery_address
      t.integer :delivery_fee
      t.integer :total_cost

      t.timestamps
    end
  end
end
