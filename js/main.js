document.getElementById("playBtn").addEventListener("click", switchVisible);
let div1 = document.getElementById("homepage"),
    div2 = document.getElementById("content");

function switchVisible() {
  if(!div1) return;
  if (getComputedStyle(div1).display == "block") {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    div1.style.display = "block";
    div2.style.display = "none";
  }
}

// Database of Films - values from https://www.boxofficemojo.com as of 12/05/21

let boFilms = [
    {
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "thumbnail": "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/4-anh-tosche-station.jpg",
        "value": 775398007
    },
    {
        "title": "Avengers (2012)",
        "thumbnail": "https://i0.wp.com/fearofaghostplanet.com/wp-content/uploads/2012/05/The-Avengers.jpg",
        "value": 1518815515
    },
    {
        "title": "Star Wars: Episode I - The Phantom Menace (1999)",
        "thumbnail": "https://www.etonline.com/sites/default/files/images/2019-04/star-wars-episode-i-the-phantom-menace_3mawjs.jpg",
        "value": 1027082707
    },
    {
        "title": "The Dark Knight Rises (2012)",
        "thumbnail": "http://wallpaperstock.net/the-dark-knight-rises-characters_wallpapers_33556_1280x720.jpg",
        "value": 1081142612
    },
    {
        "title": "Star Wars: Episode III - Revenge of the Sith (2005)",
        "thumbnail": "https://www.zastavki.com/pictures/1280x720/2005/Games_Star_Wars_Episode_III__Revenge_of_the_Sith_001428_26.jpg",
        "value": 868390560
    },
    {
        "title": "Avengers: Age of Ultron (2015)",
        "thumbnail": "https://images.hdqwalls.com/wallpapers/avengers-age-of-ultron.jpg",
        "value": 1402809540
    },
    {
        "title": "Captain America: The First Avenger (2011)",
        "thumbnail": "https://images.hdqwalls.com/download/captain-america-the-first-avenger-2011-poster-hv-1280x720.jpg",
        "value": 370569774
    },
    {
        "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
        "thumbnail": "https://coolwallpapers.me/picsup/5777387-star-wars-episode-vi-return-jedi-wallpapers.jpg",
        "value": 475106177
    },
    {
        "title": "Captain America: The Winter Soldier (2014)",
        "thumbnail": "https://www.bhmpics.com/download/captain_america__the_winter_soldier_new_posters-1280x720.jpg",
        "value": 714421503
    },
    {
        "title": "Spider-Man 2 (2004)",
        "thumbnail": "https://i.ytimg.com/vi/9dt8maD3FXE/maxresdefault.jpg",
        "value": 788976453
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "thumbnail": "https://i.ytimg.com/vi/i38PB4cQZxI/maxresdefault.jpg",
        "value": 538375067
    },
    {
        "title": "The Incredible Hulk (2008)",
        "thumbnail": "https://images.hdqwalls.com/download/the-incredible-hulk-1k-1280x720.jpg",
        "value": 264770996
    },
    {
        "title": "Spider-Man 3 (2007)",
        "thumbnail": "https://images8.alphacoders.com/457/457873.jpg",
        "value": 894983373
    },
    {
        "title": "Star Wars: Episode II - Attack of the Clones (2002)",
        "thumbnail": "https://static.sweet.tv/images/cache/movie_banners/BDJX6EQCMVXCAAQ=/16339-star-wars-episode-ii-attack-of-the-clones_1280x720.jpg",
        "value": 653779970
    },
    {
        "title": "Spider-Man: Homecoming (2017)",
        "thumbnail": "https://images.hdqwalls.com/download/spiderman-homecoming-2017-movie-qj-1280x720.jpg",
        "value": 880166924
    },
    {
        "title": "Man of Steel (2013)",
        "thumbnail": "https://eskipaper.com/images/man-of-steel-2013-movie-1.jpg",
        "value": 668045518
    },
    {
        "title": "Venom (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/venom-3d-digital-art-74-1280x720.jpg",
        "value": 856085151
    },
    {
        "title": "Avengers: Infinity War (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/avengers-infinity-war-official-poster-2018-4o-1280x720.jpg",
        "value": 2048359754
    },
    {
        "title": "Spider-Man: Far from Home (2019)",
        "thumbnail": "https://wallpaperaccess.com/full/1342814.jpg",
        "value": 1131927996
    },
    {
        "title": "Deadpool (2016)",
        "thumbnail": "https://images.hdqwalls.com/download/deadpool-firing-6p-1280x720.jpg",
        "value": 782836791
    },
    {
        "title": "Spider-Man (2002)",
        "thumbnail": "https://wallpaperaccess.com/full/496545.jpg",
        "value": 825025036
    },
    {
        "title": "Batman Begins (2005)",
        "thumbnail": "http://wallpaperstock.net/batman-begins_wallpapers_10323_1280x720.jpg",
        "value": 373661946
    },
    {
        "title": "Guardians of the Galaxy (2014)",
        "thumbnail": "https://data.1freewallpapers.com/download/2014-guardians-of-the-galaxy-1280x720.jpg",
        "value": 773350147
    },
    {
        "title": "The Dark Knight (2008)",
        "thumbnail": "https://cdn.mos.cms.futurecdn.net/74JEtF4YHG4bRKb2mV6jJd.jpg",
        "value": 1005973645
    },
    {
        "title": "Avengers: Endgame (2019)",
        "thumbnail": "https://uhdwallpapers.org/uploads/converted/19/04/21/avengers-endgame-1280x720_898598-mm-90.jpg",
        "value": 2797501328
    },
    {
        "title": "Wonder Woman (2017)",
        "thumbnail": "https://images.hdqwalls.com/download/wonder-woman-2017-poster-img-1280x720.jpg",
        "value": 822824522
    },
    {
        "title": "Wrath of Man (2021)",
        "thumbnail": "https://www.joblo.com/wp-content/uploads/2021/05/wrath-of-man-review-fb-1280x720.jpg",
        "value": 103966489
    },
    {
        "title": "X-Men: Dark Phoenix (2019)",
        "thumbnail": "https://wallpapersmug.com/download/1280x720/9fdebe/x-men-dark-phoenix-2019-movie-new-poster.jpg",
        "value": 252442974
    },
    {
        "title": "Wonder Woman 1984 (2020)",
        "thumbnail": "https://www.slashgear.com/wp-content/uploads/2020/11/WW84_main-1280x720.jpg",
        "value": 166534027
    },
    {
        "title": "Looper (2012)",
        "thumbnail": "https://www.hollywoodinsider.com/wp-content/uploads/2021/06/Hollywood-Insider-Looper-Review-Rian-Johnson-Emily-Blunt-Joseph-Gordon-Levitt-Bruce-Willis-1280x720.png",
        "value": 176506819
    },
    {
        "title": "Interstellar (2014)",
        "thumbnail": "https://filmgrab.files.wordpress.com/2015/04/3520.jpg",
        "value": 701729206
    },
    {
        "title": "John Wick (2014)",
        "thumbnail": "https://images.mubicdn.net/images/film/116988/cache-98090-1573134324/image-w1280.jpg",
        "value": 86081711
    },
    {
        "title": "Logan (2017)",
        "thumbnail": "https://images.hdqwalls.com/download/logan-2017-movie-qhd-1280x720.jpg",
        "value": 619179950
    },
    {
        "title": "The Martian (2015)",
        "thumbnail": "https://images.squarespace-cdn.com/content/v1/5421c909e4b05e40bec89718/1473787628453-UQDT909XLE0H14L0WNQG/image-asset.jpeg",
        "value": 630162448
    },
    {
        "title": "Skyfall (2012)",
        "thumbnail": "https://www.desktopbackground.org/download/1280x720/2011/10/21/284261_james-bond-skyfall-007-wallpapers-2012_1920x1080_h.jpg",
        "value": 1108569499
    },
    {
        "title": "Inception (2010)",
        "thumbnail": "https://i0.wp.com/lylesmoviefiles.com/wp-content/uploads/2016/01/inception-movie-poster.jpg?fit=800%2C500&ssl=1&resize=1280%2C720",
        "value": 836836967
    },
    {
        "title": "Baby Driver (2017)",
        "thumbnail": "https://geekireland.com/wp-content/uploads/2017/06/Babydriver-2.jpg",
        "value": 226945087
    },
    {
        "title": "Good Will Hunting (1997)",
        "thumbnail": "https://images.mubicdn.net/images/film/3384/cache-41494-1574090284/image-w1280.jpg",
        "value": 225933435
    },
    {
        "title": "Prisoners (2013)",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTI2MDkwNzMtNTdkMy00NjY5LTlkZWYtMDVjMWFjYjc3OTdhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg",
        "value": 122126687
    },
    {
        "title": "John Carter (2012)",
        "thumbnail": "https://www.flixwatch.co/wp-content/uploads/70143369.jpg.webp",
        "value": 284139100
    },
    {
        "title": "Joker (2019)",
        "thumbnail": "https://images.hdqwalls.com/download/joker-2019-76-1280x720.jpg",
        "value": 1074419384
    },
    {
        "title": "Black Panther (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/black-panther-movie-2018-poster-ln-1280x720.jpg",
        "value": 1347597973
    },
    {
        "title": "Twilight (2008)",
        "thumbnail": "https://www.teahub.io/photos/full/257-2574410_twilight-movie.jpg",
        "value": 408430415
    },
    {
        "title": "The Wolf of Wall Street (2013)",
        "thumbnail": "https://www.flixwatch.co/wp-content/uploads/70266676.jpg",
        "value": 392000694
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone (2001)",
        "thumbnail": "https://images.squarespace-cdn.com/content/v1/57c722efff7c50b25c96784d/1591450781924-STA0L8KUX4NHZWKZXZTL/image-asset.jpeg",
        "value": 1012660091
    },
    {
        "title": "Avatar (2009)",
        "thumbnail": "https://i.ytimg.com/vi/52c_ZH7ufJ8/maxresdefault.jpg",
        "value": 2847246203
    },
    {
        "title": "Harry Potter and the Deathly Hallows: Part 2 (2011)",
        "thumbnail": "https://image.tmdb.org/t/p/w1280/icfcFCxyKTUqTmVYJbiBwLKnb1O.jpg",
        "value": 1342321665
    },
    {
        "title": "Jurassic World (2015)",
        "thumbnail": "https://www.bhmpics.com/download/jurassic_world_2016-1280x720.jpg",
        "value": 1670516444
    },
    {
        "title": "The Social Network (2010)",
        "thumbnail": "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbx6svlK001C7D3g4XvJPaMHdud1Epcuje6MEuanQmkgHDkgXoKRz6O1EH_MEqv5Vf8dPRif33U0D3PYyZsAoFCmsKGR.jpg?r=18d",
        "value": 224920375
    },
    {
        "title": "Fast Five (2011)",
        "thumbnail": "https://wallpapers.gg/wp-content/uploads/2017/12/Fast-Five-2011-HD-1280x720.jpg",
        "value": 626137675
    },
    {
        "title": "Boyhood (2014)",
        "thumbnail": "https://aws.boxofficebuz.com/articles/2015/02/24/boyhood.jpg",
        "value": 48137666
    },
    {
        "title": "Moonlight (2016)",
        "thumbnail": "https://hbomax-images.warnermediacdn.com/images/GYF41gQTSdm6-wgEAAAMR/tileburnedin?size=1280x720&partner=hbomaxcom&v=06e1e9c3177866e1222ffcb9514fe960&host=artist.api.cdn.hbo.com&w=1280",
        "value": 65336603
    },
    {
        "title": "Get Out (2017)",
        "thumbnail": "https://i2.wp.com/horrormoviezonline.com/wp-content/uploads/2017/05/get-out-full-movie.jpg?resize=1280%2C720",
        "value": 255589157
    },
    {
        "title": "The Shawshank Redemption (1994)",
        "thumbnail": "https://eskipaper.com/images/the-shawshank-redemption-7.jpg",
        "value": 28817291
    },
    {
        "title": "Pulp Fiction (1994)",
        "thumbnail": "https://www.newstatesman.com/wp-content/uploads/sites/2/2021/06/pulpfiction.jpeg",
        "value": 213928762
    },
    {
        "title": "Fight Club (1999)",
        "thumbnail": "https://wallpapers.gg/wp-content/uploads/2017/12/Fight-Club-1999-HD-1280x720.jpg",
        "value": 101209702
    },
    {
        "title": "Forrest Gump (1994)",
        "thumbnail": "https://i.ytimg.com/vi/iIPvRv48leg/maxresdefault.jpg",
        "value": 678226133
    },
    {
        "title": "13 Hours (2016)",
        "thumbnail": "https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/maxresdefault12-1132x670.jpg",
        "value": 69411370
    },
    {
        "title": "The Godfather (1972)",
        "thumbnail": "https://assets.mubicdn.net/images/film/488/image-w1280.jpg?1543371300",
        "value": 246120986
    },
    {
        "title": "The Matrix (1999)",
        "thumbnail": "http://1.bp.blogspot.com/-FqQHlGtFLI8/UX6xjH1O_fI/AAAAAAAAGhg/DQrT2HgWrVo/s1600/the-matrix-original.jpg",
        "value": 466364845
    },
    {
        "title": "The Silence of the Lambs (1991)",
        "thumbnail": "https://www.joblo.com/wp-content/uploads/2017/05/hannibal-z1-1280x720.jpg",
        "value": 272742922
    },
    {
        "title": "Psycho (1960)",
        "thumbnail": "https://www.filmcompanion.in/wp-content/uploads/2020/06/film-companion-psycho-lead-image3-1280x720.jpg",
        "value": 32041845
    },
    {
        "title": "The Departed (2006)",
        "thumbnail": "https://hbomax-images.warnermediacdn.com/images/GXtlhUA0zrsJHjQEAAAfz/tileburnedin?size=1280x720&partner=hbomaxcom&v=ef3784e4777f88b8edd2d513981ed09a&host=artist.api.cdn.hbo.com&w=1280",
        "value": 291465373
    },
    {
        "title": "Reservoir Dogs (1992)",
        "thumbnail": "https://media.newyorker.com/photos/59d798fb5b388b33d3b0c419/16:9/w_1280,c_limit/Shone-Reservoir-Dogs.jpg",
        "value": 2913644
    },
    {
        "title": "Saving Private Ryan (1998)",
        "thumbnail": "https://classicmovietreasures.com/wp-content/uploads/saving-private-ryan-1998.jpg",
        "value": 482349603
    },
    {
        "title": "Toy Story (1995)",
        "thumbnail": "https://images.theabcdn.com/i/33933058",
        "value": 394436586
    },
    {
        "title": "Die Hard (1988)",
        "thumbnail": "https://thedisinsider.com/wp-content/uploads/2021/07/4B215081-4000-488A-A7C4-F78D017DA7E3.jpeg",
        "value": 141603197
    },
    {
        "title": "Ocean's Eleven (2001)",
        "thumbnail": "https://img.vxdn.net/c-max/1280/oceans-eleven-4591.jpg",
        "value": 450717150
    },
    {
        "title": "No Country for Old Men (2007)",
        "thumbnail": "https://assets.mubicdn.net/images/film/117/image-w1280.jpg?1559332906",
        "value": 171627166
    },
    {
        "title": "Hacksaw Ridge (2016)",
        "thumbnail": "https://images.mubicdn.net/images/film/133824/cache-119871-1591082724/image-w1280.jpg",
        "value": 180563636
    },
    {
        "title": "Black Hawk Down (2001)",
        "thumbnail": "https://hbomax-images.warnermediacdn.com/images/GYRweKAEDH7HDCAEAAAZ7/tileburnedin?size=1280x720&partner=hbomaxcom&v=fae4707adcc92440ca9e9bd6e818997c&host=artist.api.cdn.hbo.com&w=1280",
        "value": 172989651
    },
    {
        "title": "Grown Ups (2010)",
        "thumbnail": "https://images.mubicdn.net/images/film/27236/cache-33096-1445893542/image-w1280.jpg",
        "value": 271457301
    },
    {
        "title": "Game Night (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/game-night-2018-zl-1280x720.jpg",
        "value": 117679066
    },
    {
        "title": "The Hitman's Bodyguard (2017)",
        "thumbnail": "https://assets1.ignimgs.com/2017/07/31/hitmans-bodyguard-thumb1-1501525997945_160w.jpg?width=1280",
        "value": 176600207
    },
    {
        "title": "A Quiet Place (2018)",
        "thumbnail": "https://images.mubicdn.net/images/film/172797/cache-280546-1581033411/image-w1280.jpg",
        "value": 340952971
    },
]

let lose = document.getElementById("lose");

document.getElementById("playAgain").addEventListener("click", reloadGame);

function reloadGame() {
    window.location.href = window.location.href;
}

// Script

let title1 = document.getElementById("title1");
let value1 = document.getElementById("value1");

let title2 = document.getElementById("title2");
let value2 = document.getElementById("value2");

let highBtn = document.getElementById("higher");
let lowBtn = document.getElementById("lower");

let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");

let score = 0;
let scoreboard = document.getElementById("scoreboard");
let scoreboardLose = document.getElementById("scoreboard2");

a = random();
b = random();

function random() {
    r = Math.floor(Math.random()*75)
    return r
}

title1.innerHTML = `${boFilms[a].title}`
value1.innerHTML = `$${boFilms[a].value.toLocaleString()}`
column1.style.backgroundImage = "url(" + boFilms[a].thumbnail

lose.style.display = "none";

title2.innerHTML = `${boFilms[b].title}`
value2.innerHTML = `?`
column2.style.backgroundImage = "url(" + boFilms[b].thumbnail

highBtn.addEventListener("click", function() {
    if (boFilms[b].value >= boFilms[a].value) {
        scoreIncrease()
        c = random()

        title1.innerHTML = `${boFilms[b].title}`
        value1.innerHTML = `$${boFilms[b].value.toLocaleString()}`
        column1.style.backgroundImage = "url(" + boFilms[b].thumbnail

        title2.innerHTML = `${boFilms[c].title}`
        value2.innerHTML = `?`
        column2.style.backgroundImage = "url(" + boFilms[c].thumbnail

        boFilms[a].value = boFilms[b].value

        boFilms[b].title = boFilms[c].title
        boFilms[b].value = boFilms[c].value
        boFilms[b].thumbnail = boFilms[c].thumbnail
    }
    else {
        lose.style.display = "block";
        scoreboardLose.innerHTML = "You Scored: " + score;
        value2.innerHTML = `$${boFilms[b].value.toLocaleString()}`
    }
})

lowBtn.addEventListener("click", function() {
    if (boFilms[b].value <= boFilms[a].value) {
        scoreIncrease()
        c = random()

        title1.innerHTML = `${boFilms[b].title}`
        value1.innerHTML = `$${boFilms[b].value.toLocaleString()}`
        column1.style.backgroundImage = "url(" + boFilms[b].thumbnail

        title2.innerHTML = `${boFilms[c].title}`
        value2.innerHTML = `?`
        column2.style.backgroundImage = "url(" + boFilms[c].thumbnail

        boFilms[a].value = boFilms[b].value

        boFilms[b].title = boFilms[c].title
        boFilms[b].value = boFilms[c].value
        boFilms[b].thumbnail = boFilms[c].thumbnail
    }
    else {
        lose.style.display = "block";
        scoreboardLose.innerHTML = "You Scored: " + score;
        value2.innerHTML = `$${boFilms[b].value.toLocaleString()}`
    }
})

function scoreIncrease() {
    score++;
    scoreboard.innerHTML = "Score: " + score;
}