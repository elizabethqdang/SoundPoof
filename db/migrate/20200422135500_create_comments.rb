class CreateComments < ActiveRecord::Migration[5.2]
  def change
		create_table :comments do |t|
			t.integer "user_id", null: false
			t.integer "track_id", null: false
			t.string "body", null: false
			t.index ["track_id"], name: "index_comments_on_track_id"
			t.index ["user_id"], name: "index_comments_on_user_id"
    end
  end
end
