class AddColumnToComment < ActiveRecord::Migration[5.2]
	def change
		add_column	:comments, :timestamp, :datetime
  end
end
