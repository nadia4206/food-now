class CustomersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        customers = Customer.all
        render json: customers, status: :ok
    end

    def show
        customer = find_customer
        render json: @current_user, status: :ok
    end

    def create
        customer = Customer.create!(customer_params)
        # session[:customer_id] = customer.id
        render json: customer, status: :created
    end

    def update
        customer = find_customer
        customer.update!(customer_params)
        render json: customer, status: :accepted
    end

    def destroy
        customer = find_customer
        customer.destroy
        head :no_content
    end

    private

    def find_customer
        Customer.find(params[:id])
    end

    def customer_params
        params.permit(:name, :email, :password)
    end

end
