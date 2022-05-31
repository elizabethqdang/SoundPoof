class StaticPagesController < ApplicationController

    def root
        # render :root
		end
		
		def index
			expires_in 24.hours, :public => true
		end

end