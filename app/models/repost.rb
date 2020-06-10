class Repost < ApplicationRecord
  validates :user_id, uniqueness: { scope: :track_id,
    message: "already reposted" }

  belongs_to :user
  belongs_to :track
end