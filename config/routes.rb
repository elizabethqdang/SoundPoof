Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
		resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :update, :destroy] do
			resources :comments, only: [:index, :create, :show, :destroy]
		end
		resources :comments, only: [:update, :destroy]

		post 'users/likes/:track_id', to: 'users#like'
    delete 'users/likes/:track_id', to: 'users#unlike'
	end
	

end
