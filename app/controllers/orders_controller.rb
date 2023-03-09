class OrdersController < ApplicationController

    before_action :authorize

    def index
        orders = Order.all
        render json: orders, status: :ok
    end

    def show
        order = Order.find(params[:id])
        render json: order, status: :ok
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end

end
