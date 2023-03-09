class ItemsController < ApplicationController

    before_action :authorize

    def index
        items = Item.all
        render json: items, status: :ok
    end

    def show
        item = Item.find(params[:id])
        render json: :item, status: :ok
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end

end
