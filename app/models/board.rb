class Board < ActiveRecord::Base
  attr_accessible :image, :name
  has_many :cards
end
