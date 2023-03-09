Rails.application.routes.draw do
  resources :restaurants
  resources :order_items
  resources :orders
  resources :items
  resources :customers
  get "/cookie_click", to: "sessions#click"
  post "/login", to: "sessions#create"
  get "/current_customer", to: "customers#show"
end
