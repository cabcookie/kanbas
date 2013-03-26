#Encoding: UTF-8
module BoardsHelper
  def set_board(board)
    self.current_board = board
  end
  
  def current_board=(board)
    if board.nil?
      cookies.delete(:remember_board)
    else
      cookies[:remember_board] = { value: board.id, expires: 7.days.from_now.utc }
    end
    @current_board = board
  end
  
  def current_board
    @current_board ||= Board.find(cookies[:remember_board])
  end
end
