class Card < ActiveRecord::Base
  attr_accessible :finished_at, :image, :posX, :posY
  belongs_to :board
end
