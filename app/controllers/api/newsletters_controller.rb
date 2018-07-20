class Api::NewslettersController < ApplicationController
  before_action :set_newsletter, only: [:show, :update, :destroy]
  def index
    render json: Newsletter.all
  end

  def show
    render json: @newsletter
  end
  
  def create
    newsletter = Newsletter.new(newsletter_params)
    if newsletter.save
      render json: newsletter
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @newsletter.update(newsletter_params)
      render json: @newsletter
    else 
      render errors: { errors: newsletter.errors }, status: 422
    end
  end

  def destroy
    @newsletter.destroy
    render json: { message: 'newsletter deleted'}
  end

  private

  def set_newsletter
    @newsletter = Newsletter.find(params[:id])
  end

  def newsletter_params
    params.require(:newsletter).permit(:title, :image, :link, :index)
  end

end
