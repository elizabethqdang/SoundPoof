json.partial! "api/users/user", user: @user 

json.tracks @user.tracks


# if @user.profile_image.attached?
# 	json.profileImgUrl url_for(@user.profile_image)
# else
# 	json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'
# end

# json.tracks do
# 	@user.tracks.each do |track|
# 		json.set! track.id do
# 			json.extract! track, :id, :user_id, :title, 

# 			json.trackIds @user.tracks.pluck(:id)
# 			json.numLikes track.likes.length
# 			json.likerIds track.likers_ids
# 			json.numReposts track.reposts.length
# 			json.reposterIds track.reposters_ids
# 			json.numComments track.comments.length
# 			json.commentIds track.comment_ids

# 			json.profileImgUrl url_for(@user.profile_image)
			
# 			if track.audio.attached?
# 					json.audioUrl url_for(track.audio)
# 			else
# 					json.audioUrl 'user show'
# 			end
# 			if track.artwork.attached?
# 					json.artworkUrl url_for(track.artwork)  
# 			else
# 					json.artworkUrl 'user show'
# 			end

# 		end
# 	end
# end