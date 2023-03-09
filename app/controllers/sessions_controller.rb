class SessionsController < ApplicationController

    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else
            render json: { error: {login: "Invalid username or password"} }, status: :unauthorized
        end
    end

    def destroy
        session.delete :customer_id
        head :no_content
    end

end
