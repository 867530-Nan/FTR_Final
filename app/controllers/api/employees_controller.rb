class Api::EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]
  def index
    render json: Employee.all
  end

  def show
    render json: @employee
  end
  
  def create
    employee = Employee.new(employee_params)
    if employee.save
      render json: employee
    else
      render error: { errors: errors }, status: 422
    end
  end

  def update
    if @employee.update(employee_params)
      render json: @employee
    else 
      render errors: { errors: employee.errors }, status: 422
    end
  end

  def destroy
    @employee.destroy
    render json: { message: 'employee deleted'}
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.require(:employee).permit(:name, :title, :image, :index)
  end

end
