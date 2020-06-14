class ChangeColumnsCommentsTable < ActiveRecord::Migration[5.2]
	def change
		remove_column		:comments, :timestamp
		add_column 			:comments, :created_at, :datetime, null: false, default: Time.zone.now
    add_column 			:comments, :updated_at, :datetime, null: false, default: Time.zone.now
  end
end
