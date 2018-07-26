class Api::FitnessController < ApplicationController
  before_action :set_fitness, only: [:show, :update, :destroy]
  def index
    render json: Fitness.all
  end

  def show
    render json: @fitness
  end
  
  def create
    fitness = Fitness.new(fitness_params)
    if fitness.save
      render json: fitness
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @fitness.update(fitness_params)
      render json: @fitness
    else 
      render errors: { errors: bulletin.errors }, status: 422
    end
  end

  def destroy
    @fitness.destroy
    render json: { message: 'fitness deleted'}
  end

  private

  def set_bulletin
    @fitness = fitness.find(params[:id])
  end

  def fitness_params
    params.require(:fitness).permit(:title, :sub_title, :body, :index, :image)
  end
end
