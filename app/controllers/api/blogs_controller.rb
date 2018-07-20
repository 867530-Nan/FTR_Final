class Api::BlogsController < ApplicationController

  def index
  	passcode = ENV['BLOGGER_API_KEY']
  	blog = ENV['BLOG_ID']
  	nutrition = HTTParty.get("https://www.googleapis.com/blogger/v3/blogs/#{blog}/posts?fetchImages=true&maxResults=10&orderBy=published&key=#{passcode}")
  	
      render json: nutrition
  end
end
 