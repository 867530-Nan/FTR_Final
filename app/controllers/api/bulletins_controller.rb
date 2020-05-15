class Api::BulletinsController < ApplicationController
  before_action :set_bulletin, only: [:show, :update, :destroy]
  def index
    render json: Bulletin.all
  end
 
  def show
    render json: @bulletin
  end
  
  def create
    bulletin = Bulletin.new(bulletin_params)
    if bulletin.save
      render json: bulletin
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @bulletin.update(bulletin_params)
      render json: @bulletin
    else 
      render errors: { errors: bulletin.errors }, status: 422
    end
  end

  def destroy
    @bulletin.destroy
    render json: { message: 'bulletin deleted'}
  end

  private

  def set_bulletin
    @bulletin = Bulletin.find(params[:id])
  end

  def bulletin_params
    params.require(:bulletin).permit(:body, :title, :date, :image, :link, :link_text, :location)
  end
end
