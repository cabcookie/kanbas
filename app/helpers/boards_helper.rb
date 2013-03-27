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
    if cookies[:remember_board]
      @current_board ||= Board.find(cookies[:remember_board])
    else
      @current_board = nil
    end
  end
  
  def get_rgb(r,g,b)
    '#' + get_hex(r) + get_hex(g) + get_hex(b)
  end
  
  private
  def get_hex(dec)
    dec = 255 if dec == 256
    val = dec.to_s(16)
    if val.length < 2
      val = '0' + val
    end
    return val
  end
end
