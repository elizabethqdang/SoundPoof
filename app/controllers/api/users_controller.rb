class Api::UsersController < ApplicationController
	
	def index
		@users = User.all
		# if (params[:userIds] && params[:userIds].length > 0)
    #   @users = User.includes(:tracks, :liked_tracks, :comments, :commented_tracks).where(id: params[:userIds])
    #   @all_info = true
    # else
    #   @users = User.includes(:tracks, :commented_tracks).all
    # end
    # @users = User.includes(:tracks, :liked_tracks, :comments, :commented_tracks).where(id: params[:userIds])
    # render :index
	end

  def show
		@user = User.find(params[:id])
	
		if @user
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 404
		end
	end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
      # render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
	def update
		@user = User.find(params[:id])

    # if @user.email == 'Demo-User'
    #   render json: ['You do not have authority to edit the guest account.'], status: 401
    #   return
    # end

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	def like
    @like = current_user.likes.new(track_id: params[:track_id])
		# @like = current_user.likes.new(track_id: params[:track_id])
		# @like.user_id = current_user.id;
    if @like.save
      render :like
    else
      render json: @like.errors.full_messages, status: 422
    end
	end
	
	def repost
    @repost = current_user.reposts.new(track_id: params[:track_id])
    if @repost.save
      render :repost
    else
      render json: @repost.errors.full_messages, status: 422
    end
  end

  def unlike
    @like = current_user.likes.find_by(track_id: params[:track_id])

    if @like
      @like.destroy
      render :like
    else
      render json: ['Already unliked, not authorized, or track does not exist'], status: 401
    end
	end
	
  def unrepost
    @repost = current_user.reposts.find_by(track_id: params[:track_id])

    if @repost
      @repost.destroy
      render :repost
    else
      render json: ['Already removed, not authorized, or reposted track does not exist'], status: 401
    end
	end
	
	def follow
    @follow = current_user.follows.new(following_id: params[:following_id])

    if @follow.save
      render :follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
	end
	
  def unfollow
    @follow = current_user.follows.find_by(following_id: params[:following_id])

    if @follow
      @follow.destroy
      render :follow
    else
      render json: ['Already unfollowed, not authorized, or user does not exist'], status: 401
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password, :bio, :location, :username, :profile_image)
  end

end