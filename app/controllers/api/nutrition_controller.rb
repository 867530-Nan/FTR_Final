class Api::NutritionController < ApplicationController
    before_action :set_nutrition, only: [:show, :update, :destroy]
    def index
      render json: Nutrition.all
    end
  
    def show
      render json: @nutrition
    end
    
    def create
      nutrition = Nutrition.new(nutrition_params)
      if nutrition.save
        render json: nutrition
      else
        render error: { errors: errors }, status: 422
      end
    end
  
    def update
      if @nutrition.update(nutrition_params)
        render json: @nutrition
      else 
        render errors: { errors: bulletin.errors }, status: 422
      end
    end
  
    def destroy
      @nutrition.destroy
      render json: { message: 'nutrition deleted'}
    end
  
    private
  
    def set_nutrition
      @nutrition = Nutrition.find(params[:id])
    end
  
    def nutrition_params
      params.require(:nutrition).permit(:title, :sub_title, :body, :index, :image)
    end
  end
  