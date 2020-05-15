class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  def index
    render json: Event.all
  end
  
  def show
    render json: @event
  end

  def moveUp
    currentID = params[:id]
    second = Event.find_by(location: params[:location], itemNumber: params[:itemNumber]-1)
    second.update_attribute(:itemNumber, second[:itemNumber]+1)
    first = Event.find(currentID)
    first.update_attribute(:itemNumber, first[:itemNumber]-1)
    render json: Event.all
  end 
  
  def moveDown
    currentID = params[:id]
    second = Event.find_by(location: params[:location], itemNumber: params[:itemNumber]+1)
    second.update_attribute(:itemNumber, second[:itemNumber]-1)
    first = Event.find(currentID)
    first.update_attribute(:itemNumber, first[:itemNumber]+1)
    render json: Event.all
  end
  
  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render error: { errors: errors }, status: 422
    end
  end
  
  def update
    if @event.update(event_params)
      render json: @event
    else 
      render errors: { errors: event.errors }, status: 422
    end
  end
  
  def destroy
    @event.destroy
    render json: { message: 'event deleted'}
  end
  
  private
  
  def set_event
    @event = Event.find(params[:id])
  end
  
  def event_params
    params.require(:event).permit(:time, :body, :title, :date, :image, :link, :link_text, :itemNumber, :location, :subtitle)
  end
end