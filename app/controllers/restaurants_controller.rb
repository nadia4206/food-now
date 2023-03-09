class RestaurantsController < ApplicationController

    before_action :authorize

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, status: :ok
    end

    private

    def authorize
        return render json: { error: "Not autohrized" }, status: :unauthorized unless session.include? :customer_id
    end

end
