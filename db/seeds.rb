# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all

u1 = User.create({ email: "Demo-User", password: "password", bio: "", location: "", username: "" })
u1.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'), filename: 'placeholder.jpeg')

u2 = User.create({ email: "OWLSA", password: "password", bio: "", location: "", username: "" })
u2.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/owsla.png'), filename: 'owsla.png')

u3 = User.create({ email: "Skillex", password: "password", bio: "", location: "", username: "Skrillex" })
u3.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.08.36+PM.png'), filename: 'skrillex.png')

u4 = User.create({ email: "Flux Pavilion", password: "password", bio: "", location: "", username: "Flux Pavilion" })
u4.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/flux.png'), filename: 'flux.png')

u5 = User.create({ email: "Flume", password: "password", bio: "", location: "", username: "Flume" })
u5.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/flume.png'), filename: 'flume.png')

u6 = User.create({ email: "Louis The Child", password: "password", bio: "", location: "", username: "Louis The Child" })
u6.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'), filename: 'placeholder.jpeg')

u7 = User.create({ email: "Kendrick Lamar", password: "password", bio: "", location: "", username: "Kendrick Lamar" })
u7.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/damn.png'), filename: 'damn.png')

u8 = User.create({ email: "RL Grime", password: "password", bio: "", location: "Los Angeles", username: "RL Grime" })
u8.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'), filename: 'placeholder.jpeg')

u9 = User.create({ email: "Adventure Club", password: "password", bio: "", location: "", username: "Adventure Club" })
u9.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/adventureclub.png'), filename: 'adventureclub.png')

u10 = User.create({ email: "Seven Lions", password: "password", bio: "", location: "", username: "Seven Lions" })
u10.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/sevenlions.png'), filename: 'sevenlions.png')

u11 = User.create({ email: "J Cole", password: "password", bio: "", location: "", username: "J Cole" })
u11.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/jcole.png'), filename: 'jcole.png')

u12 = User.create({ email: "Cashmere Cat", password: "password", bio: "", location: "", username: "Cashmere Cat" })
u12.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/cashmerecat.png'), filename: 'cashmerecat.png')

u13 = User.create({ email: "Excision", password: "password", bio: "", location: "", username: "Excision" })
u13.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision.png'), filename: 'excision.png')

u14 = User.create({ email: "Odesza", password: "password", bio: "", location: "", username: "Odesza" })
u14.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'), filename: 'placeholder.jpeg')

u15 = User.create({ email: "Louis Futon", password: "password", bio: "", location: "", username: "Louis Futon" })
u15.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'), filename: 'placeholder.jpeg')

u16 = User.create({ email: "Kill The Noise", password: "password", bio: "", location: "", username: "Kill The Noise" })
u16.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/killthenoise.png'), filename: 'killthenoise.png')

u17 = User.create({ email: "Bassnectar", password: "password", bio: "", location: "", username: "Bassnectar" })
u17.profile_image.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/bassnectar.png'), filename: 'bassnectar.png')

u18 = User.create({ email: "EMINEM", password: "password", bio: "", location: "", username: "EMINEM" })
u18.profile_image.attach(io: open('/Users/eqdang/Desktop/app_academy/SoundPoof/app/assets/tracks/eminem.png'), filename: 'eminem.png')




Track.destroy_all

t1 = Track.create({
	title: 'Blase', 
	artist: 'Ty Dolla/Louis The Child Remix', 
	user_id: u6.id,
})
t1.audio.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-blase.mp3'), filename: 'louisthechild-blase.mp3')
t1.artwork.attach(io: open('https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.26.54+PM.png'), filename: 'blase.png')

t2 = Track.create({
title: "Say My Name", 
artist: "Odesza", 
user_id: u14.id,
})
t2.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/odesza-saymyname.mp3"), filename: 'odesza-saymyname.mp3')
t2.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/saymyname.png"), filename: "saymyname.png")

t3 = Track.create({
title: "Rush Over Me", 
artist: "Seven Lions", 
user_id: u10.id 
})
t3.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/rushoverme.mp3"), filename: "rushoverme.mp3")
t3.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/saidthesky.png"), filename: "saidthesky.png")

t4 = Track.create({
title: "Crave You", 
artist: "Flight Facilities-Adventure Club", 
user_id: u9.id,
})
t4.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/adventureclub-craveyou.mp3"), filename: "adventureclub-craveyou.mp3")
t4.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/craveyou.png"), filename: "craveyou.png")

t5 = Track.create({
title: "Throwin' Elbows", 
artist: "Excision", 
user_id: u13.id,
})
t5.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision-throwinelbows.mp3"), filename: "excision-throwinelbows.mp3" )
t5.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/excision.png"), filename: "excision.png")

t6 = Track.create({
title: "Bass Head", 
artist: "Bassnectar", 
user_id: u17.id 
})
t3.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/basshead.mp3"), filename: "basshead.mp3")
t3.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/basshead.png"), filename: "basshead.png")

t7 = Track.create({
title: "We Rise", 
artist: "San Holo", 
user_id: u1.id,
})
t7.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/sanholo-werise.mp3"), filename: "sanholo-werise.mp3")
t7.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.23.46+PM.png"), filename: "werise.png")

t8 = Track.create({
title: "Cannonball", 
artist: "Flux Pavilion", 
user_id: u4.id 
})
t8.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/cannonball.mp3"), filename: "cannonball.mp3")
t8.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"), filename: "placeholder.jpeg")

t9 = Track.create({
title: "Drop The Game", 
artist: "Flume & Chet Faker", 
user_id: u5.id 
})
t9.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/dropthegame.mp3"), filename: "dropthegame.mp3")
t9.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/dropthegame.png"), filename: "dropthegame.png")

t10 = Track.create({
title: "DNA", 
artist: "Kendrick Lamar", 
user_id: u7.id,
})
t10.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-dna.mp3"), filename: "kendrick-dna.mp3")
t10.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/damn.png"), filename: "damn.png")

t11 = Track.create({
title: "From Here", 
artist: "Louis The Child", 
user_id: u6.id 
})
t11.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/fromhere.mp3"), filename: "fromhere.mp3")
t11.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/logo.png"), filename: "logo.png")

t12 = Track.create({
title: "Middle", 
artist: "J Cole", 
user_id: u11.id 
})
t12.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/middlechild.mp3"), filename: "middlechild.mp3")
t12.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/middlechild.png"), filename: "middlechild.png")

t13 = Track.create({
title: "Do You", 
artist: "Cashmere Cat", 
user_id: u12.id 
})
t13.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/doyou.mp3"), filename: "doyou.mp3")
t13.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/doyou.png"), filename: "doyou.png")

t14 = Track.create({
title: "My Way", 
artist: "Fetty Wap/Floss", 
user_id: u2.id 
})
t14.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/myway.mp3"), filename: "myway.mp3")
t14.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/myway.png"), filename: "myway.png")

t15 = Track.create({
title: "Never Be Like You", 
artist: "Flume", 
user_id: u5.id 
})
t15.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/neverbelikeyou.mp3"), filename: "neverbelikeyou.mp3")
t15.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/neverbelikeyou.png"), filename: "neverbelikeyou.png")

t16 = Track.create({
title: "You're On", 
artist: "Louis The Child - Madeon", 
user_id: u6.id,
})
t16.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisthechild-youreon.mp3"), filename: "louisthechild-youreon.mp3" )
t16.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.21.06+PM.png"), filename: "louisthechild.png" )

t17 = Track.create({
title: "Humble", 
artist: "Kendrick Lamar", 
user_id: u7.id,
})
t17.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/kendrick-humble.mp3"), filename: "humble.mp3" )
t17.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/damn.png"), filename: "damn.png")

t18 = Track.create({
title: "Bangarang", 
artist: "Skrillex", 
user_id: u3.id,
})
t18.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/skrillex-bangarang.mp3"), filename: "skrillex-bangarang.mp3")
t18.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.08.36+PM.png"), filename: "skrillex.png") 

t19 = Track.create({
title: "Strobe", 
artist: "Feed Me - Deadmau5", 
user_id: u2.id,
})
t19.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/deadmau5-strobe.mp3"), filename: "deadmau5-strobe.mp3" )
t19.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/owsla.png"), filename: "placeholder.jpeg")

t20 = Track.create({
title: "Busted", 
artist: "DRAM - Herobust", 
user_id: u2.id,
})
t20.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/herobust-dram.mp3"), filename: "herobust-dram.mp3" )
t20.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"), filename: "owsla.png")

t21 = Track.create({
title: "You Were Right", 
artist: "Rufus Du Sol - Louis Futon", 
user_id: u1.id,
})
t21.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/louisfuton-youwereright.mp3"), filename: "louis-futonyouwereright.mp3" )
t21.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+8.49.07+PM.png"), filename: "rufusdusol.png" )

t22 = Track.create({
title: "Feel The Volume", 
artist: "Jauz - Joyryde", 
user_id: u1.id,
})
t22.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/jauz-feelthevolume.mp3"), filename: "jauz-feelthevolume.mp3" )
t22.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/Screen+Shot+2020-04-01+at+9.32.12+PM.png"), filename: "joyryde.png" ) 

t23 = Track.create({
title: "Gold Dust", 
artist: "Flux Pavilion", 
user_id: u4.id,
})
t23.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/flux-golddust.mp3"), filename: "flux-golddust.mp3" )
t23.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/owsla.png"), filename: "owsla.png")

t24 = Track.create({
title: "Levels", 
artist: "Skrillex/Avicii", 
user_id: u3.id,
})
t24.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/skrillex-levels.mp3"), filename: "skrillex-levels.mp3" )
t24.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/levels.png"), filename: "levels.png")

t24 = Track.create({
title: "Rip N Dip", 
artist: "Kill The Noise/Getter", 
user_id: u16.id,
})
t24.audio.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/ripndip.mp3"), filename: "ripndip.mp3" )
t24.artwork.attach(io: open("https://soundpoof.s3-us-west-2.amazonaws.com/tracks/ripndip.png"), filename: "ripndip.png")

t25 = Track.create({
title: "Eminem - Godzilla ft. Juice WRLD", 
artist: "EMINEM", 
user_id: u18.id,
})
t25.audio.attach(io: open("/Users/eqdang/Desktop/app_academy/SoundPoof/app/assets/tracks/eminem-godzilla.mp3"), filename: "eminem-godzilla.mp3" )
t25.artwork.attach(io: open("/Users/eqdang/Desktop/app_academy/SoundPoof/app/assets/tracks/musictobemurderedby.png"), filename: "musictobemurderedby.png")

t26 = Track.create({
title: "Eminem - I Will (ft. KXNG Crooked, Royce Da 5''9"" & Joell Ortiz)", 
artist: "EMINEM", 
user_id: u18.id,
})
t26.audio.attach(io: open("/Users/eqdang/Desktop/app_academy/SoundPoof/app/assets/tracks/eminem-iwill.mp3"), filename: "eminem-iwill.mp3" )
t26.artwork.attach(io: open("/Users/eqdang/Desktop/app_academy/SoundPoof/app/assets/tracks/musictobemurderedby.png"), filename: "musictobemurderedby.png")






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
