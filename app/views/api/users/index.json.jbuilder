if @all_info
  json.users do
    @users.each do |user|
      json.set! user.id do
        json.partial! 'api/users/user', user: user
      end
    end
  end
  json.doNotReplace true
else
  json.users do
    @users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :email, :location, :bio
        # json.profile_image_url url_for(user.profile_image)
      end
    end
  end
  json.doNotReplace false
end