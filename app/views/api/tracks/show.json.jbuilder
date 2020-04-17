# json.track do
# 	json.partial! '/api/tracks/track', track: @track
# end


json.track do
	json.set! @track.id do
		json.extract! @track, :id, :title, :user_id, :artist
        if @track.artwork.attached? 
            json.artworkUrl url_for(@track.artwork)
        else 
            json.artworkUrl ''
        end
         if @track.audio.attached? 
            json.audioUrl url_for(@track.audio)
        else 
            json.audioUrl ''
				end
	end
end