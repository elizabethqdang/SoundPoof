Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :tracks, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:index]
    end
	end
	
	# match "tracks/upload", :as => "upload"
	# match "tracks/delete", :as => "delete"
	
	# root :to => "tracks#index"

  root to: 'static_pages#root'

end
