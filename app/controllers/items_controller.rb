class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, status: :ok
    end

    def show
        item = Item.find(params[:id])
        render json: :item, status: :ok
    end

end
