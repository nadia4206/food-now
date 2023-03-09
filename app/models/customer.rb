class Customer < ApplicationRecord
    has_many :orders
    has_many :items, through: :orders
    has_many :order_items, through: :orders

    has_secure_password
end
