class Api::SessionsController < ApplicationController
  
	def create
		if logged_in?
			render json: ['You are already logged in'], status: 401
      return
		end

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
		)
		
    if @user
      login!(@user)
      render "/api/users/show"
		else
			# render json: @user.errors.full_messages, status: 401
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["You are not logged in"], status: 404
    end
  end

end