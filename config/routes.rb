Rails.application.routes.draw do
  resources :restaurants
  resources :order_items
  resources :orders
  resources :items
  resources :customers

  post '/signup', to: 'customers#create'
  post '/login', to: 'sessions#create'
  get '/authorized_user', to: 'customers#show'
  delete '/logout', to: 'sessions#destroy'
  get '/restaurants/:id/items', to: "items#show"
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
