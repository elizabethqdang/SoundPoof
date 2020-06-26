class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, allow_nil: true, length: { minimum: 6 }

	before_validation :ensure_session_token 
	
	has_one_attached :profile_image
	has_attached_file :banner, validate_media_type: false, default_url: "/assets/images/banner4.jpg"
	has_attached_file :profile, validate_media_type: false, default_url: "/assets/images/placeholder.jpeg"
  
  # validates_attachment_content_type :banner, :profile
  # :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/,
  #  :message => 'file type is not allowed (only jpeg/png/gif images)'

  has_many :tracks,
    foreign_key: :user_id,
		class_name: :Track,
		primary_key: :id,
		dependent: :destroy

	has_many :likes,
		dependent: :destroy,
		class_name: :Like,
		primary_key: :id,
		foreign_key: :user_id

	has_many :liked_tracks,
		source: :likes,
		through: :tracks

	has_many :comments,
		dependent: :destroy,
		class_name: :Comment,
		primary_key: :id,
		foreign_key: :user_id

	has_many	:reposts,
		dependent:	:destroy,
		class_name:	:Repost,
		primary_key:	:id,
		foreign_key:	:user_id
	
	has_many :reposted_tracks,
		source: :reposts,
		through: :tracks

	def avatar_check user
      if user.profile_image.present?
        image_tag user.profileImgUrl :thumb
      else
        image_tag 'placeholder.jpeg'
      end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
end
