class OrderItemsController < ApplicationController

    before_action :authorize

    def index
        order_items = OrderItem.all
        render json: order_items, status: :ok
    end

    def show
        order_item = OrderItem.find(params[:id])
        render json: order_item, status: :ok
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end

end
