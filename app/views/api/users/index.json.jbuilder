@users.each do |user|
	json.set! user.id do
		json.extract! user, :id, :username, :email, :location, :bio

		json.id user.id
		json.email user.email
		json.username user.username
		json.location user.location
		json.bio user.bio
		# json.trackIds user.track_ids
		json.trackIds user.tracks.pluck(:id)
		json.likedTrackIds user.liked_track_ids
		# json.commentedTrackIds user.commented_track_ids
		json.commentIds user.comments.pluck(:id)
		json.repostedTrackIds user.reposted_track_ids

		json.bannerUrl asset_path(user.banner.url)
		json.profileUrl asset_path(user.profile.url)

		if user.profile_image.attached?
			json.profileImgUrl url_for(user.profile_image)
		else
			json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jp'
		end
		
	
	end
end
