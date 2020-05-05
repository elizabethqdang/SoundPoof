class Api::CommentsController < ApplicationController

    def create 
				@comment = current_user.comments.new(comment_params)
				@comment.user_id = current_user.id
				@comment.track_id = params[:track_id]
        if @comment.save
            # @track = Track.find(@comment.track_id)
            render "api/comments/show"
        else 
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render "api/comments/show"
        else 
            render json: @comment.errors.full_messages, status: 401
        end 
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        # @track = Track.find(@comment.track_id)
        render "api/comments/show"
    end 

    private
    def comment_params
        params.require(:comment).permit(:body)
    end
end