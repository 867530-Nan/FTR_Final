Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources 'newsletters'
    resources 'bulletins'
    resources 'boards'
    resources 'employees'
    resources 'testimonials'
    resources 'fitness'
  end

  namespace :api do
    get 'home/index'
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
