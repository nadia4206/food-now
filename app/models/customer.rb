class Customer < ApplicationRecord
    has_many :orders
    has_many :items, through: :orders
    has_many :order_items, through: :orders

    validates :username, :password, :name, :email, presence: true
    validates_uniqueness_of :username, message: "this username is already in use"

    has_secure_password

end
