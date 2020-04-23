# json.track do
# 	json.partial! '/api/tracks/track', track: @track
# end


# json.track do
# 	json.set! @track.id do
		json.extract! @track, :id, :title, :artist, :user_id
		json.uploaderId @track.user_id

        if @track.artwork.attached? 
            json.artwork_url url_for(@track.artwork)
        else 
            json.artwork_url ''
        end
         if @track.audio.attached? 
            json.audio_url url_for(@track.audio)
        else 
            json.audio_url ''
				end
	# end
# end