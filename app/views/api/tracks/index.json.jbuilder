json.extract! track, :id, :title, :artist, :user_id

@tracks.each do |track|
    json.set! track.id do 
        json.partial! "api/tracks/track", track: track
    end 
end 