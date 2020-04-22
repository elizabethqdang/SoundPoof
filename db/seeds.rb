# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all

u1 = User.create({ email: "Demo-User", password: "password" })
u2 = User.create({ email: "mr. rager", password: "password" })
u3 = User.create({ email: "bananas", password: "password" })
u4 = User.create({ email: "elizabeth", password: "password" })
u5 = User.create({ email: "johnnyb011", password: "password" })


Track.destroy_all

t1 = Track.create({
	title: 'Blase', 
	artist: 'Ty Dolla/Louis The Child Remix', 
	user_id: u1.id,
	# audio: File.new(Rails.root.join('app', 'assets', 'tracks', 'louisthechild blase.mp3')),
  # image: File.new(Rails.root.join('app','assets','images','#{track_pics[t]}')),
	# audio_url: 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-blase.mp3',
	# artwork_url: 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.26.54+PM.png'
})
# file = open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-blase.mp3')
# artwork = open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.26.54+PM.png')
# t1.audio.attach(io: file, filename: 'louisthechild-blase.mp3')
# t1.artwork.attach(io: artwork, filename: 'blase.png')
t1.audio.attach(io: open('https://soundpoof-pro.s3-us-west-2.amazonaws.com/tracks/louisthechild-blase.mp3'), filename: 'louisthechild-blase.mp3')
t1.artwork.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.26.54+PM.png'), filename: 'blase.png')

t2 = Track.create({
title: "Say My Name", 
artist: "Odesza", 
user_id: u1.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/odesza-saymyname.mp3"
})
t2.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/odesza-saymyname.mp3"), filename: 'odesza-saymyname.mp3')

t3 = Track.create({
title: "Rush Over Me", 
artist: "Seven Lions", 
user_id: u4.id 
})
# t3.audio.attach(io: open("Song"), filename: "Song")

t4 = Track.create({
title: "Crave You", 
artist: "Flight Facilities-Adventure Club", 
user_id: u1.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/adventureclub-craveyou.mp3"
})
t4.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/adventureclub-craveyou.mp3"), filename: "adventureclub-craveyou.mp3")

t5 = Track.create({
title: "Throwin' Elbows", 
artist: "Excision", 
user_id: u4.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision-throwinelbows.mp3"
})
t5.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision-throwinelbows.mp3"), filename: "excision-throwinelbows.mp3" )

t6 = Track.create({
title: "Song", 
artist: "Nero", 
user_id: u4.id 
})

t7 = Track.create({
title: "We Rise", 
artist: "San Holo", 
user_id: u1.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/sanholo-werise.mp3",
# artwork_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.23.46+PM.png"
})
t7.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/sanholo-werise.mp3"), filename: "sanholo-werise.mp3")
t7.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.23.46+PM.png"), filename: "werise.png")

t8 = Track.create({
title: "Song", 
artist: "Ghastly", 
user_id: u3.id 
})

t9 = Track.create({
title: "Song", 
artist: "Borgore", 
user_id: u4.id 
})

t10 = Track.create({
title: "DNA", 
artist: "Kendrick Lamar", 
user_id: u1.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-dna.mp3"
})
t10.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-dna.mp3"), filename: "kendrick-dna.mp3")

t11 = Track.create({
title: "Song", 
artist: "RL Grime", 
user_id: u4.id 
})

t12 = Track.create({
title: "Song", 
artist: "Louis Futon", 
user_id: u3.id 
})

t13 = Track.create({
title: "Song", 
artist: "Cashmere Cat", 
user_id: u4.id 
})

t14 = Track.create({
title: "Song", 
artist: "Hotel Garuda", 
user_id: u4.id 
})

t15 = Track.create({
title: "Song", 
artist: "Autograph", 
user_id: u2.id 
})

t16 = Track.create({
title: "You're On", 
artist: "Louis The Child - Madeon", 
user_id: u4.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-youreon.mp3",
# artwork_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.21.06+PM.png"
})
t16.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-youreon.mp3"), filename: "louisthechild-youreon.mp3" )
t16.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.21.06+PM.png"), filename: "louisthechild.png" )

t17 = Track.create({
title: "Humble", 
artist: "Kendrick Lamar", 
user_id: u4.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-humble.mp3"
})
t17.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-humble.mp3"), filename: "humble.mp3" )

t18 = Track.create({
title: "Bangarang", 
artist: "Skrillex", 
user_id: u4.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/skrillex-bangarang.mp3",
# artwork_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.08.36+PM.png"
})
# t18.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/skrillex-bangarang.mp3"), filename: "skrillex-bangarang.mp3")
# t18.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.08.36+PM.png"), filename: "skrillex.png") 

t19 = Track.create({
title: "Strobe", 
artist: "Feed Me - Deadmau5", 
user_id: u3.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/deadmau5-strobe.mp3"
})
t19.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/deadmau5-strobe.mp3"), filename: "deadmau5-strobe.mp3" )

t20 = Track.create({
title: "Busted", 
artist: "DRAM - Herobust", 
user_id: u2.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/herobust-dram.mp3"
})
t20.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/herobust-dram.mp3"), filename: "herobust-dram.mp3" )

t21 = Track.create({
title: "You Were Right", 
artist: "Rufus Du Sol - Louis Futon", 
user_id: u2.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisfuton-youwereright.mp3",
# artwork_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.49.07+PM.png"
})
t21.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisfuton-youwereright.mp3"), filename: "louis-futonyouwereright.mp3" )
t21.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.49.07+PM.png"), filename: "rufusdusol.png" )

t22 = Track.create({
title: "Feel The Volume", 
artist: "Jauz - Joyryde", 
user_id: u3.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/jauz-feelthevolume.mp3",
# artwork_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.32.12+PM.png"
})
t22.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/jauz-feelthevolume.mp3"), filename: "jauz-feelthevolume.mp3" )
t22.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.32.12+PM.png"), filename: "joyryde.png" ) 

t23 = Track.create({
title: "Gold Dust", 
artist: "Flux Pavilion", 
user_id: u2.id,
# audio_url: "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/flux-golddust.mp3"
})
t23.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/flux-golddust.mp3"), filename: "flux-golddust.mp3" )



Comment.destroy_all

c1 = Comment.create({
	body: 'asdfjkl;',
	track_id: t1.id,
	user_id: u1.id
})
c2 = Comment.create({
	body: 'asdfjkl;',
	track_id: t2.id,
	user_id: u2.id
})
c3 = Comment.create({
	body: 'asdfjkl;',
	track_id: t3.id,
	user_id: u3.id
})
c4 = Comment.create({
	body: 'asdfjkl;',
	track_id: t4.id,
	user_id: u4.id
})