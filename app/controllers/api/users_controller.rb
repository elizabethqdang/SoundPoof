class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # render :show
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  # def update
  #   @user = selected_user
  #   if @user && @user.update_attributes(user_params)
  #     render :show
  #   elsif !@user
  #     render json: ['Could not locate user'], status: 400
  #   else
  #     render json: @user.errors.full_messages, status: 401
  #   end
  # end
  
  def show
		@user = User.find(params[:id])
		if @user
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 404
		end
end
  
  def index
    @users = User.all
    render :index
	end
	

	def like
    @like = current_user.likes.new(track_id: params[:track_id])
    if @like.save
      render :like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def unlike
    @like = current_user.likes.find_by(track_id: params[:track_id])

    if @like
      @like.destroy
      render :like
    else
      render json: ['already unliked or not authorized to unlike'], status: 401
    end
  end

  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end

end