class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image_url, :rating
end
