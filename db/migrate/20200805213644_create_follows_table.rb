class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
		create_table :follows do |t|
			t.integer		:user_id, null: false
			t.integer		:following_id, null: false

			t.timestamps
			t.index			[:user_id, :following_id], unique: true
			t.index			[:user_id]
    end
  end
end
