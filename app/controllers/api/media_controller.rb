class Api::MediaController < ApplicationController
  before_action :set_medium, only: [:show, :update, :destroy]
  def index
    render json: Medium.all
  end

  def show
    render json: Medium.where(frontPage: true)
  end
  
  def create
    medium = Medium.new(medium_params)
    if medium.save
      render json: medium
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @medium.update(medium_params)
      render json: @medium
    else 
      render errors: { errors: medium.errors }, status: 422
    end
  end

  def destroy
    @medium.destroy
    render json: { message: 'medium deleted' }
  end

  def moveUp
    currentID = params[:id]
    second = Medium.find_by(itemNumber: params[:itemNumber]-1)
    second.update_attribute(:itemNumber, second[:itemNumber]+1)
    first = Medium.find(currentID)
    first.update_attribute(:itemNumber, first[:itemNumber]-1)
    render json: Medium.all
  end 
  
  def moveDown
    currentID = params[:id]
    second = Medium.find_by(itemNumber: params[:itemNumber]+1)
    second.update_attribute(:itemNumber, second[:itemNumber]-1)
    first = Medium.find(currentID)
    first.update_attribute(:itemNumber, first[:itemNumber]+1)
    render json: Medium.all
  end

  private

  def set_medium
    @medium = Medium.find(params[:id])
  end

  def medium_params
    params.require(:media).permit(:name, :link, :image, :frontPage, :itemNumber, :description)
  end

end

