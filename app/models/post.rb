class Post < ApplicationRecord
  validates :title, presence: true

  validate :ensure_artwork

  has_one_attached :artwork

  def ensure_artwork
    unless self.artwork.attached?
      errors[:artwork] << "must be attached"
    end
  end
end
