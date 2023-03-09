class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    customer = Customer.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:customer_id] = customer.id
        render json: customer, status: :created
      else
        render json: { errors: ["Invalid email or password"] }, status: :unauthorized
      end
  end

  def destroy
    session.delete :customer_id
      head :no_content
  end

end
