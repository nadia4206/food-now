class OrderItemsController < ApplicationController

    def index
        order_items = OrderItem.all
        render json: order_items, status: :ok
    end

    def show
        order_item = OrderItem.find(params[:id])
        render json: order_item, status: :ok
    end

    def create
        order_item = OrderItem.create!(order_items_params)
        render json: order_item, status: :created
    end

    private

    def order_items_params
        params.permit(:order_id, :item_id)
    end

end
