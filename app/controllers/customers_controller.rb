class CustomersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
        customer = Customer.create!(customer_params)
        if customer.valid?
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        customer = Customer.find(session[:customer_id])
        render json: customer
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
    end

    def customer_params
        params.permit(:name, :email, :username, :password)
    end

end
