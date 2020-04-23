class EditLikeColumns < ActiveRecord::Migration[5.2]
	def change
		remove_column		:likes, :userlike_id
		add_column			:likes, :user_id, :integer
		add_index				:likes,	:user_id
		add_index				:likes,	[:user_id, :track_id]

  end
end
