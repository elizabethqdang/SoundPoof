class AddColumnToFollowsTable < ActiveRecord::Migration[5.2]
	def change
		remove_column		:follows,	:user_id
		add_column 	:follows, :follower_id, :integer
  end
end
