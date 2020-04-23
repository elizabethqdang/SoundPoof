@users.each do |user|
    json.set! user.id do 
				json.extract! user, :id, :email, :username, :tracks, :liked_tracks, :comment_ids
		end
	end