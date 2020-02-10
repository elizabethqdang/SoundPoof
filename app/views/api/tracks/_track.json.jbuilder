json.extract! track, :id, :title, :artist, :user_id, 

# if track.user.artwork_url.attached? 
#   json.userImage url_for(track.user.artwork_url)
# end 
# json.trackUploader track.user.username
# json.trackUploaderId track.user.id
# json.trackUrl url_for(track.track_url)
# json.artworkUrl url_for(track.album_cover)