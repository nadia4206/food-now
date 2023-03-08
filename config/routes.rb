Rails.application.routes.draw do
  resources :restaurants
  resources :order_items
  resources :orders
  resources :items
  resources :customers

  get '/restaurants/:id/items', to: "items#show"
  
end
