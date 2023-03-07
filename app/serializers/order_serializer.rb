class OrderSerializer < ActiveModel::Serializer
  attributes :id, :delivery_address, :delivery_fee, :total_cost
  has_one :customer
  has_one :item
end
