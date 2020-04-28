# @tracks.each do |track|
# 		json.set! track.id do 
# 			json.partial! 'api/tracks/track', track: track			
# 		end
# end


@tracks.each do |track|
    json.set! track.id do 
				json.extract! track, :id, :title, :artist, :user_id
        if track.artwork.attached? 
            json.artworkUrl url_for(track.artwork)
        else 
            json.artworkUrl ''
        end
				if track.audio.attached? 
            json.audioUrl url_for(track.audio)
        else 
            json.audioUrl ''
        end
		end
end

# <ul>
# <% @tracks.each do |track| %>
#    <li><%= track.key %> - <%= link_to "Delete",  "tracks/delete/?track=" + track.key, :confirm => 'Are you sure you want to delete ' + track.key + '?' %></li>
# <% end %>
# </ul>

# if (params[:track])
#     AWS::S3::S3Object.find(params[:track], BUCKET).delete
#     redirect_to root_path
# else
#     render :text => "No song was found to delete!"
# end