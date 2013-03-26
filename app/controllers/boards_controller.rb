#Encoding: UTF-8
class BoardsController < ApplicationController
  def new
    @board = Board.new
  end
  
  def create
    @board = Board.new(params[:board])
    if @board.save
      @active_page = 'boards'
      @boards = Board.all
      render :index
    else
      redirect to: :new
    end
  end
  
  def index
    @active_page = 'boards'
    @boards = Board.all
  end
  
  def show
    @board = Board.find(params[:board])
    current_board = @board
  end
end
