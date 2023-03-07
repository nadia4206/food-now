Rails.application.routes.draw do
  resources :restaurants
  resources :order_items
  resources :orders
  resources :items
  resources :customers
  get '/hello', to: 'application#hello_world'
end
