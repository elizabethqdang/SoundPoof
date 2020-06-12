json.id track.id
json.title track.title
json.artist track.artist
json.description track.description
json.timestamp track.created_at
json.user_id track.user.id
json.user_id track.user_id
json.audioUrl url_for(track.audio)
json.artworkUrl url_for(track.artwork)

json.numLikes track.likes.length
json.likerIds track.likes.pluck(:user_id)

json.numComments track.comments.length
json.commentIds track.comments.pluck(:id)

json.numReposts track.reposts.length
json.reposterIds track.reposts.pluck(:user_id)

# json.userId track.user.id
json.profileUrl asset_path(track.user.profile.url)
json.profileImgUrl url_for(track.user.profile_image)
