Comment.create!([
  {user_id: 3, track_id: 1, body: "asdfjkl;"},
  {user_id: 2, track_id: 2, body: "asdfjkl;"},
  {user_id: 9, track_id: 3, body: "asdfjkl;"},
  {user_id: 13, track_id: 4, body: "asdfjkl;"},
  {user_id: 1, track_id: 1, body: "asdfjkl;"},
  {user_id: 1, track_id: 17, body: "asdf"},
  {user_id: 1, track_id: 4, body: "asdf"}
])
Follow.create!([
  {following_id: 6, follower_id: 1},
  {following_id: 11, follower_id: 1},
  {following_id: 7, follower_id: 1},
  {following_id: 12, follower_id: 1},
  {following_id: 9, follower_id: 1}
])
Like.create!([
  {track_id: 1, user_id: 1},
  {track_id: 3, user_id: 1},
  {track_id: 12, user_id: 1},
  {track_id: 13, user_id: 1},
  {track_id: 15, user_id: 1},
  {track_id: 21, user_id: 1},
  {track_id: 17, user_id: 1},
  {track_id: 7, user_id: 1},
  {track_id: 10, user_id: 1},
  {track_id: 4, user_id: 1}
])
Repost.create!([
  {user_id: 1, track_id: 2},
  {user_id: 1, track_id: 16},
  {user_id: 1, track_id: 23},
  {user_id: 1, track_id: 17},
  {user_id: 1, track_id: 3}
])
Track.create!([
  {title: "Eminem - Godzilla ft. Juice WRLD", description: nil, user_id: 10, artist: "Eminem, Juice WRLD", audioPeaks: nil},
  {title: "Eminem - I Will (ft. KXNG Crooked, Royce Da 5''9 & Joell Ortiz)", description: nil, user_id: 10, artist: "Eminem", audioPeaks: nil},
  {title: "Crave You - Adventure Club Remix", description: nil, user_id: 9, artist: "Adventure Club, Flight Facilities", audioPeaks: nil},
  {title: "Say It - Illenium Remix", description: nil, user_id: 5, artist: "Flume, Illenium", audioPeaks: nil},
  {title: "Like a Boss", description: nil, user_id: 4, artist: "Eptic", audioPeaks: nil},
  {title: "Bass Head", description: nil, user_id: 13, artist: "Bassnectar", audioPeaks: nil},
  {title: "Would You Ever", description: nil, user_id: 15, artist: "Skrillex", audioPeaks: nil},
  {title: "High - Bassnectar Remix", description: nil, user_id: 3, artist: "Rusko, Bassnectar", audioPeaks: nil},
  {title: "Heat Waves - Diplo Remix", description: nil, user_id: 6, artist: "Glass Animals, Diplo", audioPeaks: nil},
  {title: "Levels - Skrillex Remix", description: nil, user_id: 15, artist: "Skrillex, Avicii", audioPeaks: nil},
  {title: "poof", description: nil, user_id: 1, artist: "", audioPeaks: nil},
  {title: "Nothing for Free", description: nil, user_id: 8, artist: "Pendulum", audioPeaks: nil},
  {title: "poofpoof", description: nil, user_id: 1, artist: "", audioPeaks: nil},
  {title: "Drop The Game", description: nil, user_id: 5, artist: "Flume, Chet Faker", audioPeaks: nil},
  {title: "DNA", description: nil, user_id: 7, artist: "Kendrick Lamar", audioPeaks: nil},
  {title: "From Here", description: nil, user_id: 2, artist: "Louis The Child", audioPeaks: nil},
  {title: "Middle", description: nil, user_id: 11, artist: "J Cole", audioPeaks: nil},
  {title: "Do You", description: nil, user_id: 12, artist: "Cashmere Cat", audioPeaks: nil},
  {title: "Dreamland", description: nil, user_id: 3, artist: "Rusko", audioPeaks: nil},
  {title: "Never Be Like You (feat. Kai)", description: nil, user_id: 5, artist: "Flume, kai", audioPeaks: nil},
  {title: "You're On", description: nil, user_id: 2, artist: "Louis The Child, Madeon", audioPeaks: nil},
  {title: "ADHD", description: nil, user_id: 7, artist: "Kendrick Lamar", audioPeaks: nil},
  {title: "Insane", description: nil, user_id: 5, artist: "Flume", audioPeaks: nil},
  {title: "Blase - Louis The Child Remix", description: nil, user_id: 2, artist: "Ty Dolla, Louis The Child", audioPeaks: nil},
  {title: "Say My Name", description: nil, user_id: 14, artist: "Odesza", audioPeaks: nil}
])
User.create!([
  {username: "Glass Animals", email: "Glass Animals", password_digest: "$2a$12$ku.18RTm742fzTQ5ErN.vejbhVOR5anWgjajOQJuWS1j68HbMqlji", session_token: "iq0xX7NqT06GiRaGdFR2wQ", bio: "", location: ""},
  {username: "Kendrick Lamar", email: "Kendrick Lamar", password_digest: "$2a$12$RartKmxC11Dpi4lwyfWx3e92fLl3GU/qe4h149DudCdxab7.2WVS2", session_token: "LhEyOdVe-y1niB8jAPRbsw", bio: "", location: ""},
  {username: "Pendulum", email: "Pendulum", password_digest: "$2a$12$K.6xlKg0U..94tPkwJGDNeIs6MGKLbfWPp.Hw0S1vFh208parHlz2", session_token: "4ZFbAJxNsV3CheYZN7r5dA", bio: "", location: ""},
  {username: "Adventure Club", email: "Adventure Club", password_digest: "$2a$12$82occCNtTQDTHw6A2xjhQuxgAhxer3tHMh/SCgLRh0SKhSOfjRzkq", session_token: "gQnfExV9GoEE-DhvmEHqGA", bio: "", location: ""},
  {username: "Eminem", email: "Eminem", password_digest: "$2a$12$adivpKh3xscq02.gToeY..umpfM6jGvhawgZB9NKbi7mtteNHunH2", session_token: "CG2FT57bPLkfs0S_8tMyPw", bio: "", location: ""},
  {username: "J Cole", email: "J Cole", password_digest: "$2a$12$9GVZzJhpraz73vdfLw5CouKNBQu5QsRiiFehfB1Vz1SqTQQMEOWLy", session_token: "lomAHulC4zpbbun6uOAYzg", bio: "", location: ""},
  {username: "Cashmere Cat", email: "Cashmere Cat", password_digest: "$2a$12$TEdyEKQlJ09U.Uhu23GnUeXyv4aFDqUqJC.t7MLErA3tpM7BOmoEa", session_token: "Jje3CtvXwxltEb3UyDbKUw", bio: "", location: ""},
  {username: "Louis The Child", email: "Louis The Child", password_digest: "$2a$12$j4I/sKN6EzjoS/zym0bXreIjzYRD1/Ea9skCD2nMyjwx4kIOcvqeC", session_token: "8QlwprreP6eex0T5O_Xuww", bio: "", location: "Chicago, United States"},
  {username: "Rusko", email: "Rusko", password_digest: "$2a$12$Qx0g.G2GsoRzL/L.GslvHuf76ghy2cRi9Rvq0/KAUe6AMeZ6Zy.ne", session_token: "q3zjh696DOb2KAvpw5kkiQ", bio: "", location: ""},
  {username: "Eptic", email: "Eptic", password_digest: "$2a$12$AGnGgd5EsbFAqboJcNt/c.QfLHECKiIyOnuvhK9w0bC3eY0e7ztpe", session_token: "NCpku0VmBYU_zNWo0HX1Gg", bio: "", location: ""},
  {username: "Flume", email: "Flume", password_digest: "$2a$12$/Y676Uh.7JEO/zoO6u7DiuUIKeNjETicHgnqOp4cWpNv8IRPzWQI6", session_token: "IRVO0gg2h6zFePXIBpNuNA", bio: "", location: ""},
  {username: "Bassnectar", email: "Bassnectar", password_digest: "$2a$12$FXQh1A9jolUupIFZP14N/ew5IIY84OwZWr8JgSUVe/yx9rLNpsOGK", session_token: "F-8JaM8ox_PMzztaWhBbmg", bio: "", location: ""},
  {username: "Odesza", email: "Odesza", password_digest: "$2a$12$CVyra.Q1YnFChnBU1f.tLeUdbizCoVbbRwPA7rX6pSaZnRv2ugIxu", session_token: "ChuDcIKotkz5gSth6-volg", bio: "", location: "Seattle"},
  {username: "OWSLA", email: "OWSLA", password_digest: "$2a$12$oSlfT12wfN0kUUJc0R/w2.DRRjpJt2dso0HdeTMtPvQu/8jbZuvgG", session_token: "05E4hWY6JUChtaeumZsPGQ", bio: "", location: "The Mothership"},
  {username: "Demo-User", email: "Demo-User", password_digest: "$2a$12$zeLdsfJCgMLnNQVh6GS1JuIAWr61j49dQHYa0RSkMS5TL9L2p4AGy", session_token: "_5tl2dBSJtB3mH-5ynrx_g", bio: "", location: ""}
])
