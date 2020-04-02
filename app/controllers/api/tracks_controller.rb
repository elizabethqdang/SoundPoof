class Api::TracksController < ApplicationController

  def index
    @tracks = AWS::S3::Bucket.find(BUCKET).objects
  end
 
  def upload
    begin
      AWS::S3::S3Object.store(sanitize_filename(params[:mp3file].original_filename), params[:mp3file].read, BUCKET, :access => :public_read)
      redirect_to root_path
    rescue
      render :text => "Couldn't complete the upload"
    end
  end
 
  def delete
    if (params[:track])
      AWS::S3::S3Object.find(params[:track], BUCKET).delete
      redirect_to root_path
    else
      render :text => "No track was found to delete!"
    end
  end
 
  private
 
  def sanitize_filename(file_name)
    just_filename = File.basename(file_name)
    just_filename.sub(/[^\w\.\-]/,'_')
  end
 

end