class Follow < ApplicationRecord
		validates :follower_id, presence: true, uniqueness: { scope: :following_id, message: "already followed" }
		validate :exclude_following_self

		belongs_to :follower,
			class_name: :User,
			foreign_key: :follower_id,
			primary_key: :id

		belongs_to :following,
			class_name: :User,
			foreign_key: :following_id,
			primary_key: :id

	  def exclude_following_self
			if follower_id == following_id
				errors.add(:follower_id, "oops, you can't follow yourself")
			end
  	end
	
end