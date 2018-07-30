class Api::FitnessHeadingsController < ApplicationController
    before_action :set_fitness_heading, only: [:show, :update, :destroy]
    def index
      render json: Fitness_Heading.all
    end
  
    def show
      render json: @fitness_heading
    end
    
    def create
      fitness_heading = Fitness_Heading.new(fitness_heading_params)
      if fitness_heading.save
        render json: fitness_heading
      else
        render error: { errors: errors }, status: 422
      end
    end
  
    def update
      if @fitness_heading.update(fitness_heading_params)
        render json: @fitness_heading
      else 
        render errors: { errors: bulletin.errors }, status: 422
      end
    end
  
    def destroy
      @fitness_heading.destroy
      render json: { message: 'fitness_heading deleted'}
    end
  
    private
  
    def set_fitness_heading
      @fitness_heading = Fitness_Heading.find(params[:id])
    end
  
    def fitness_heading_params
      params.require(:fitness_heading).permit(:title, :sub_title, :body, :index, :image)
    end
  end
