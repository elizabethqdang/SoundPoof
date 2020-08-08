json.id track.id
json.title track.title
json.artist track.artist
json.description track.description
json.created_at track.created_at
json.user_id track.user.id
# json.user_id track.user_id
json.audioUrl url_for(track.audio)
json.artworkUrl url_for(track.artwork)

json.numLikes track.likes.length
json.likerIds track.likers_ids
# json.likerIds track.likes.pluck(:user_id)

json.numComments track.comments.length
json.commentIds track.comment_ids
# json.commentIds track.comments.pluck(:id)

json.numReposts track.reposts.length
json.reposterIds track.reposters_ids
# json.reposterIds track.reposts.pluck(:user_id)

json.profileUrl asset_path(track.user.profile.url)
# json.profileImgUrl url_for(track.user.profile_image)

if track.user.profile_image.attached?
		json.profileImgUrl url_for(track.user.profile_image)
else
		json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'
end
