class RestaurantsController < ApplicationController
    skip_before_action :authorize
    # comment out after navbar is set up properly!!

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, serializer: RestaurantMenuSerializer, status: :ok
    end

end
