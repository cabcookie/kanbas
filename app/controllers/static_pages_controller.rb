class StaticPagesController < ApplicationController
  def home
    @active_page = 'home'
  end
end
