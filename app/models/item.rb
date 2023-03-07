class Item < ApplicationRecord
    has_many :orders
    has_many :customers, through: :orders
    has_many :order_items, through: :orders
    belongs_to :restaurant
end
