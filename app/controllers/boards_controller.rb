#Encoding: UTF-8
class BoardsController < ApplicationController
  def new
    @board = Board.new
  end
  
  def create
    @board = Board.new(params[:board])
    if @board.save
      current_board = @board
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
    @board = Board.find(params[:id])
    set_board(@board)
  end
end
