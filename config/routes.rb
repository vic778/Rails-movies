Rails.application.routes.draw do
  root "movies#index"
  resources :movies do
    collection do 
      post :search
    end
  end
end
