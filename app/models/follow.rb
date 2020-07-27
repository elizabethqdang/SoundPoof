class Follow < ApplicationRecord
    validates :user_id, uniqueness: { scope: :user_id, message: "already followed" }

    belongs_to :user
end