Rails.application.routes.draw do
  root 'pages#index'

  resources :trades, only: %i[index create]

  namespace :api do
    namespace :v1 do
      resources :pokemons
      resources :trades
    end
  end
  
  get '/*path', to: 'pages#index'

end
