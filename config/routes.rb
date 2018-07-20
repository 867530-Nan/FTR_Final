Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources 'newsletters'
  end

  namespace :api do
    resources 'boards'
  end

  namespace :api do
    resources 'employees'
  end

  namespace :api do
    get 'home/index'
  end

  namespace :api do
    resources 'notes'
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

  namespace :api do
    resources :testimonials
  end


  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
