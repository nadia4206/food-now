class OrdersController < ApplicationController

    def index
        orders = Order.all
        render json: orders, status: :ok
    end

    def show
        order = Order.find(params[:id])
        render json: order, status: :ok
    end

end
