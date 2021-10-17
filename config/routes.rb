Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :pokemons
    end
  end
  
  get '*path', to: 'pages#index'

end
