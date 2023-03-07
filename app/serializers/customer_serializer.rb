class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
end
