Kanbas::Application.routes.draw do
  resources :boards do
    resources :cards
  end

  root to: 'static_pages#home'
end
