class Api::HomeController < ApplicationController
  def index
    bulletin = Event.all
    newsletter = Newsletter.last
    gallery = Medium.find_by frontPage: true
    instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
    {query:
      {access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
            count:  '1'}
          })
      render json: {photos: instagram, bulletins: bulletin, newsletter: newsletter, gallery: gallery} 
  end
end
