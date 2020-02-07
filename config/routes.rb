Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources 'newsletters'
    resources 'bulletins'
    resources 'boards'
    resources 'employees'
    resources 'testimonials'
    resources 'fitness'
    resources 'nutrition'
    resources 'media'
    resources 'events'

    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
  end

  namespace :api do
    get 'home/index'
  end

  namespace :api do
    post '/eventMoveUp', to: 'events#moveUp'
  end

  namespace :api do
    post '/eventMoveDown', to: 'events#moveDown'
  end

  namespace :api do
    post '/galleryMoveUp', to: 'media#moveUp'
  end

  namespace :api do
    post '/galleryMoveDown', to: 'media#moveDown'
  end

  namespace :api do
    get 'blogs/index'
  end

  namespace :api do
    get 'instagram/index'
  end

  namespace :api do
    get 'instagram/service'
  end

  namespace :api do
    get 'instagram/home'
  end


  get '*other', to: 'static#index'
end
