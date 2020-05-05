# if @new_session
	# json.extract! @user, :id, :username, :email, :bio, :location
# else
  json.partial! 'api/users/user', user: @user
# end