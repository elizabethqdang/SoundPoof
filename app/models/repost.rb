class Repost < ApplicationRecord
  validates :user_id, uniqueness: { scope: :track_id,
    message: "already reposted" }

	belongs_to :user,
		class_name:	:User,
		primary_key:	:id,
		foreign_key:	:user_id

	belongs_to :track,
		class_name:	:Track,
		primary_key:	:id,
		foreign_key:	:track_id
end