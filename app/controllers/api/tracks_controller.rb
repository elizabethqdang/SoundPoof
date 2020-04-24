class Api::TracksController < ApplicationController

  def index
		# @tracks = AWS::S3::Bucket.find(BUCKET).objects
		@tracks = Track.all
		render "api/tracks/index"
  end
 
  def create
    # begin
    #   AWS::S3::S3Object.store(sanitize_filename(params[:mp3file].original_filename), params[:mp3file].read, BUCKET, :access => :public_read)
    #   redirect_to root_path
    # rescue
    #   render :text => "Couldn't complete the upload"
		# end

		# @track = current_user.tracks.new(track_params)
		@track = Track.new(track_params)
		@track.user_id = current_user.id;
		if @track.save
			render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 401
    end
  end
 
	def show
		@track = Track.find(params[:id])
		render "api/tracks/show"
	end
	
  def destroy
    if (params[:track])
      AWS::S3::S3Object.find(params[:track], BUCKET).delete
      redirect_to root_path
    else
      render :text => "No track was found to delete!"
		end
		
		# @track = Track.find(params[:id])
    # @track.destroy
    # render json: {}
  end
 
	private
	
	def track_params
    params.require(:track).permit(:title, :artwork, :audio, :artist, :user_id)
  end
 
  def sanitize_filename(file_name)
    just_filename = File.basename(file_name)
    just_filename.sub(/[^\w\.\-]/,'_')
  end
 

end