source 'https://rubygems.org'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'
gem 'rails', '3.2.8'

# Twitter bootstrap Gem with SASS functionality
gem 'bootstrap-sass', '2.1'

# A nice Datepicker that works with Bootstrap
#gem 'bootstrap-datepicker-rails', '0.6.21'

# In place editing support
#gem 'best_in_place'

# To use ActiveModel has_secure_password
#gem 'bcrypt-ruby', '3.0.1'

# allow pagination with Bootstrap CSS
#gem 'will_paginate', '3.0.3'
#gem 'bootstrap-will_paginate', '0.0.6'

# Include JQuery
gem 'jquery-rails', '2.0.2'

# Allow integration of OmniAuth todo Logins with Facebook, Twitter, etc.
#gem 'omniauth-facebook'
#gem 'omniauth' #, '0.3.2'

# Integrate great symbols and fonts with Font Awesome
#gem 'font-awesome-sass-rails'

# Integrate nice Google Charts
#gem 'google_visualr'

# Integration for development and test
group :development, :test do
  # local database SQLite
  gem 'sqlite3', '1.3.5'
  
  # testing frameworks RSpec, Guard and Spork
  gem 'rspec-rails', '2.11.0'
  gem 'guard-rspec', '1.2.1'
  gem 'guard-spork', '1.2.0'
  gem 'spork', '0.9.2'

  # create demo data
  gem 'faker', '1.0.1'
end

# Test frameworks for only the test environments
group :test do
  gem 'capybara', '1.1.2'
  gem 'factory_girl_rails', '4.1.0'
  gem 'cucumber-rails', '1.2.1', :require => false
  gem 'database_cleaner', '0.7.0'
  # gem 'launchy', '2.1.0'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  # sure that heroku don't need them?
  gem 'sass-rails',   '3.2.5'
  gem 'coffee-rails', '3.2.2'
  gem 'uglifier', '1.2.3'
  gem 'compass'
end

# Gems used only for production
group :production do
  # heroku uses PostgreSQL
  gem 'pg', '0.12.2'
end
