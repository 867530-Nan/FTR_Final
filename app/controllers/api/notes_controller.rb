class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]
  def index
    render json: Note.all
  end

  def show
    render json: @note
  end
  
  def create
    note = Note.new(note_params)
    if note.save
      render json: note
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else 
      render errors: { errors: note.errors }, status: 422
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'note deleted'}
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:body, :title, :date, :image)
  end
end
