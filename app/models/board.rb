class Board < ActiveRecord::Base
  attr_accessible :image, :name
  has_many :cards
  default_scope order: 'created_at desc'
end
