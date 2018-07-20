class Api::BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]
  def index
    render json: Board.all
  end

  def show
    render json: @board
  end
  
  def create
    board = Board.new(board_params)
    if board.save
      render json: board
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @board.update(board_params)
      render json: @board
    else 
      render errors: { errors: board.errors }, status: 422
    end
  end

  def destroy
    @board.destroy
    render json: { message: 'board deleted'}
  end

  private

  def set_board
    @board = Board.find(params[:id])
  end

  def board_params
    params.require(:board).permit(:name, :title, :image, :index, :bio)
  end


end 
