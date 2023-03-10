class RestaurantsController < ApplicationController
    # skip_before_action :authorize
    # comment out after navbar is set up properly!!

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, serializer: RestaurantMenuSerializer, status: :ok
    end

    def destroy
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        head :no_content
    end

    def update
        restaurant = Restaurant.find(params[:id])
        restaurant.update!(restaurant_params)
        render json: restaurant, status: :accepted

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    private

    def restaurant_params
        params.permit(:name, :address, :image_url, :rating)
    end

end
