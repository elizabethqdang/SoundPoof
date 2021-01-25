# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)
# 
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('tracks')
ActiveRecord::Base.connection.reset_pk_sequence!('comments')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('reposts')


require 'open-uri'


User.destroy_all
# User.reset_pkey_sequence!
Track.destroy_all
# Track.reset_pk_sequence!
Comment.destroy_all
# Comment.reset_pk_sequence!
Repost.destroy_all
# Repost.reset_pk_sequence!
Like.destroy_all
# Like.reset_pk_sequence!



u1 = User.create({ id: 1, email: "Demo-User", password: "password", bio: "", location: "", username: "Demo-User" })
u1.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/placeholder.jpeg'), filename: 'placeholder.jpeg')

u2 = User.create({ id: 2, email: "Louis The Child", password: "password", bio: "", location: "Chicago, United States", username: "Louis The Child" })
u2.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/louisthechild.png'), filename: 'louisthechild.png')

u3 = User.create({ id: 3, email: "Rusko", password: "password", bio: "", location: "", username: "Rusko" })
u3.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/rusko.png'), filename: 'rusko.png')

u4 = User.create({ id: 4, email: "Eptic", password: "password", bio: "", location: "", username: "Eptic" })
u4.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/eptic.png'), filename: 'eptic.png')

u5 = User.create({ id: 5, email: "Flume", password: "password", bio: "", location: "", username: "Flume" })
u5.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/flume.png'), filename: 'flume.png')

u6 = User.create({ id: 6, email: "Glass Animals", password: "password", bio: "", location: "", username: "Glass Animals" })
u6.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/glassanimals.png'), filename: 'glassanimals.png')

u7 = User.create({ id: 7, email: "Kendrick Lamar", password: "password", bio: "", location: "", username: "Kendrick Lamar" })
u7.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/kendrick.png'), filename: 'kendrick.png')

u8 = User.create({ id: 8, email: "Pendulum", password: "password", bio: "", location: "", username: "Pendulum" })
u8.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/pendulum.png'), filename: 'pendulum.png')

u9 = User.create({ id: 9, email: "Adventure Club", password: "password", bio: "", location: "", username: "Adventure Club" })
u9.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/adventureclub.png'), filename: 'adventureclub.png')

u10 = User.create({ id: 10, email: "Eminem", password: "password", bio: "", location: "", username: "Eminem" })
u10.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/eminem.png'), filename: 'eminem.png')

u11 = User.create({ id: 11, email: "J Cole", password: "password", bio: "", location: "", username: "J Cole" })
u11.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/jcole.png'), filename: 'jcole.png')

u12 = User.create({ id: 12, email: "Cashmere Cat", password: "password", bio: "", location: "", username: "Cashmere Cat" })
u12.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/cashmerecat.png'), filename: 'cashmerecat.png')

u13 = User.create({ id: 13, email: "Bassnectar", password: "password", bio: "", location: "", username: "Bassnectar" })
u13.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/bassnectar.png'), filename: 'bassnectar.png')

u14 = User.create({ id: 14, email: "Odesza", password: "password", bio: "", location: "Seattle", username: "Odesza" })
u14.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/odesza.png'), filename: 'odesza.png')

u15 = User.create({ id: 15, email: "OWSLA", password: "password", bio: "", location: "The Mothership", username: "OWSLA" })
u15.profile_image.attach(io: open('https://soundpoof-seeds.s3-us-west-2.amazonaws.com/owsla.png'), filename: 'owsla.png')







t1 = Track.create({
	id: 1,
	title: "Blase - Louis The Child Remix", 
	artist: 'Ty Dolla, Louis The Child', 
	user_id: u2.id,
})
t1.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/blase.mp3"), filename: "blase.mp3")
t1.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/blase.png"), filename: "blase.png")

t2 = Track.create({
id: 2,
title: "Say My Name", 
artist: "Odesza", 
user_id: u14.id,
})
t2.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/saymyname.mp3"), filename: "saymyname.mp3")
t2.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/saymyname.png"), filename: "saymyname.png")

t3 = Track.create({
id: 3,
title: "High - Bassnectar Remix", 
artist: "Rusko, Bassnectar", 
user_id: u3.id,
})
t3.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/high.mp3"), filename: "high.mp3")
t3.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/high.png"), filename: "high.png")

t4 = Track.create({
id: 4,
title: "Crave You - Adventure Club Remix", 
artist: "Adventure Club, Flight Facilities", 
user_id: u9.id,
})
t4.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/craveyou.mp3"), filename: "craveyou.mp3")
t4.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/craveyou.png"), filename: "craveyou.png")

t5 = Track.create({
id: 5,
title: "Like a Boss", 
artist: "Eptic", 
user_id: u4.id,
})
t5.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/likeaboss.mp3"), filename: "likeaboss.mp3")
t5.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/likeaboss.png"), filename: "likeaboss.png")

t6 = Track.create({
id: 6,
title: "Bass Head", 
artist: "Bassnectar", 
user_id: u13.id 
})
t3.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/basshead.mp3"), filename: "basshead.mp3")
t3.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/basshead.png"), filename: "basshead.png")

t7 = Track.create({
id: 7,
title: "Heat Waves - Diplo Remix", 
artist: "Glass Animals, Diplo", 
user_id: u6.id,
})
t7.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/heatwaves.mp3"), filename: "heatwaves.mp3")
t7.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/heatwaves.png"), filename: "heatwaves.png")

t8 = Track.create({
id: 8,
title: "Nothing for Free", 
artist: "Pendulum", 
user_id: u8.id,
})
t8.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/nothingforfree.mp3"), filename: "nothingforfree.mp3")
t8.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/nothingforfree.png"), filename: "nothingforfree.png")

t9 = Track.create({
id: 9,
title: "Drop The Game", 
artist: "Flume, Chet Faker", 
user_id: u5.id 
})
t9.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/dropthegame.mp3"), filename: "dropthegame.mp3")
t9.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/dropthegame.png"), filename: "dropthegame.png")

t10 = Track.create({
id: 10,
title: "DNA", 
artist: "Kendrick Lamar", 
user_id: u7.id,
})
t10.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/dna.mp3"), filename: "dna.mp3")
t10.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/damn.png"), filename: "damn.png")

t11 = Track.create({
id: 11,
title: "From Here", 
artist: "Louis The Child", 
user_id: u2.id 
})
t11.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/fromhere.mp3"), filename: "fromhere.mp3")
t11.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/fromhere.png"), filename: "fromhere.png")

t12 = Track.create({
id: 12,
title: "Middle", 
artist: "J Cole", 
user_id: u11.id 
})
t12.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/middlechild.mp3"), filename: "middlechild.mp3")
t12.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/middlechild.png"), filename: "middlechild.png")

t13 = Track.create({
id: 13,
title: "Do You", 
artist: "Cashmere Cat", 
user_id: u12.id 
})
t13.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/doyou.mp3"), filename: "doyou.mp3")
t13.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/doyou.png"), filename: "doyou.png")

t14 = Track.create({
id: 14,
title: "Dreamland", 
artist: "Rusko", 
user_id: u3.id,
})
t14.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/dreamland.mp3"), filename: "dreamland.mp3")
t14.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/dreamland.png"), filename: "dreamland.png")

t15 = Track.create({
id: 15,
title: "Never Be Like You (feat. Kai)", 
artist: "Flume, kai", 
user_id: u5.id 
})
t15.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/neverbelikeyou.mp3"), filename: "neverbelikeyou.mp3")
t15.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/neverbelikeyou.png"), filename: "neverbelikeyou.png")

t16 = Track.create({
id: 16,
title: "You're On", 
artist: "Louis The Child, Madeon", 
user_id: u2.id,
})
t16.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/youreon.mp3"), filename: "youreon.mp3" )
t16.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/youreon.png"), filename: "youreon.png" )

t17 = Track.create({
id: 17,
title: "ADHD", 
artist: "Kendrick Lamar", 
user_id: u7.id,
})
t17.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/adhd.mp3"), filename: "adhd.mp3" )
t17.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/adhd.png"), filename: "adhd.png")

t18 = Track.create({
id: 18,
title: "Insane", 
artist: "Flume", 
user_id: u5.id,
})
t18.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/insane.mp3"), filename: "insane.mp3" )
t18.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/insane.png"), filename: "insane.png" )

t19 = Track.create({
id: 19,
title: "Eminem - Godzilla ft. Juice WRLD", 
artist: "Eminem, Juice WRLD", 
user_id: u10.id,
})
t19.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/godzilla.mp3"), filename: "godzilla.mp3" )
t19.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/musictobemurderedby.png"), filename: "musictobemurderedby.png")

t20 = Track.create({
id: 20,
title: "Eminem - I Will (ft. KXNG Crooked, Royce Da 5''9"" & Joell Ortiz)", 
artist: "Eminem", 
user_id: u10.id,
})
t20.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/iwill.mp3"), filename: "iwill.mp3" )
t20.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/musictobemurderedby.png"), filename: "musictobemurderedby.png")

t21 = Track.create({
id: 21,
title: "Say It - Illenium Remix", 
artist: "Flume, Illenium", 
user_id: u5.id,
})
t21.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/sayit.mp3"), filename: "sayit.mp3" )
t21.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/sayit.png"), filename: "sayit.png")

t22 = Track.create({
id: 22,
title: "Would You Ever", 
artist: "Skrillex", 
user_id: u15.id,
})
t22.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/wouldyouever.mp3"), filename: "wouldyouever.mp3" )
t22.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/wouldyouever.png"), filename: "wouldyouever.png")

t23 = Track.create({
id: 23,
title: "Levels - Skrillex Remix", 
artist: "Skrillex, Avicii", 
user_id: u15.id,
})
t23.audio.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/levels.mp3"), filename: "levels.mp3" )
t23.artwork.attach(io: open("https://soundpoof-seeds.s3-us-west-2.amazonaws.com/levels.png"), filename: "levels.png")






c1 = Comment.create({
	id: 1,
	body: 'asdfjkl;',
	track_id: t1.id,
	user_id: u3.id
})
c2 = Comment.create({
	id: 2,
	body: 'asdfjkl;',
	track_id: t2.id,
	user_id: u2.id
})
c3 = Comment.create({
	id: 3,
	body: 'asdfjkl;',
	track_id: t3.id,
	user_id: u9.id
})
c4 = Comment.create({
	id: 4,
	body: 'asdfjkl;',
	track_id: t4.id,
	user_id: u13.id
})
c5 = Comment.create({
	id: 5,
	body: 'asdfjkl;',
	track_id: t1.id,
	user_id: u1.id
})





r1 = Repost.create({
	id: 1,
	track_id: t2.id,
	user_id: u1.id
})
r2 = Repost.create({
	id: 2,
	track_id: t3.id,
	user_id: u1.id
})
r3 = Repost.create({
	id: 3,
	track_id: t16.id,
	user_id: u1.id
})
r4 = Repost.create({
	id: 4,
	track_id: t23.id,
	user_id: u1.id
})




l1 = Like.create({
	id: 1,
	track_id: t1.id,
	user_id: u1.id
})
l2 = Like.create({
	id: 2,
	track_id: t3.id,
	user_id: u1.id
})
l3 = Like.create({
	id: 3,
	track_id: t4.id,
	user_id: u1.id
})
l4 = Like.create({
	id: 4,
	track_id: t12.id,
	user_id: u1.id
})
l8 = Like.create({
	id: 8,
	track_id: t13.id,
	user_id: u1.id
})
l5 = Like.create({
	id: 5,
	track_id: t15.id,
	user_id: u1.id
})
l6 = Like.create({
	id: 6,
	track_id: t21.id,
	user_id: u1.id
})
l7 = Like.create({
	id: 7,
	track_id: t7.id,
	user_id: u1.id
})