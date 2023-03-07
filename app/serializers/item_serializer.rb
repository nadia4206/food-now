class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_price, :item_image
end
