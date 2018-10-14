class Api::TestimonialsController < ApplicationController
	before_action :set_testimonial, only: [:update, :destroy]

  def index
  	render json: Testimonial.all
  end

  def create
    testimonial = Testimonial.new(testimonial_params)
    if testimonial.save
      render json: testimonial
    else
      render json: { errors: testimonial.errors.full_messages }, status: :bad_request
    end
  end

  private

  def testimonial_params
  	params.require(:testimonial).permit(:body, :subject, :date, :author)
  end

  def set_testimonial
  	@testimonial = Testimonial.find(params[:id])
  end
end
