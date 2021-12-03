document.getElementById('playBtn').addEventListener('click', switchVisible);
var div1 = document.getElementById('homepage'),
    div2 = document.getElementById('content');
function switchVisible() {
  if(!div1) return;
  if (getComputedStyle(div1).display == 'block') {
    div1.style.display = 'none';
    div2.style.display = 'block';
  } else {
    div1.style.display = 'block';
    div2.style.display = 'none';
  }
}

// Database of Films - values from https://www.boxofficemojo.com

let boFilms = [
    {
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "thumbnail": "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/4-anh-tosche-station.jpg",
        "value": "$775,398,007"
    },
    {
        "title": "Avengers (2012)",
        "thumbnail": "https://i0.wp.com/fearofaghostplanet.com/wp-content/uploads/2012/05/The-Avengers.jpg",
        "value": "$1,518,815,515"
    },
    {
        "title": "Star Wars: Episode I - The Phantom Menace (1999)",
        "thumbnail": "https://www.etonline.com/sites/default/files/images/2019-04/star-wars-episode-i-the-phantom-menace_3mawjs.jpg",
        "value": "$1,027,082,707"
    },
    {
        "title": "The Dark Knight Rises (2012)",
        "thumbnail": "http://wallpaperstock.net/the-dark-knight-rises-characters_wallpapers_33556_1280x720.jpg",
        "value": "$1,081,142,612"
    },
    {
        "title": "Star Wars: Episode III - Revenge of the Sith (2005)",
        "thumbnail": "https://www.zastavki.com/pictures/1280x720/2005/Games_Star_Wars_Episode_III__Revenge_of_the_Sith_001428_26.jpg",
        "value": "$868,390,560"
    },
    {
        "title": "Avengers: Age of Ultron (2015)",
        "thumbnail": "https://images.hdqwalls.com/wallpapers/avengers-age-of-ultron.jpg",
        "value": "$1,402,809,540"
    },
    {
        "title": "Captain America: The First Avenger (2011)",
        "thumbnail": "https://images.hdqwalls.com/download/captain-america-the-first-avenger-2011-poster-hv-1280x720.jpg",
        "value": "$370,569,774"
    },
    {
        "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
        "thumbnail": "https://coolwallpapers.me/picsup/5777387-star-wars-episode-vi-return-jedi-wallpapers.jpg",
        "value": "$475,106,177"
    },
    {
        "title": "Captain America: The Winter Soldier (2014)",
        "thumbnail": "https://www.bhmpics.com/download/captain_america__the_winter_soldier_new_posters-1280x720.jpg",
        "value": "$714,421,503"
    },
    {
        "title": "Spider-Man 2 (2004)",
        "thumbnail": "https://i.ytimg.com/vi/9dt8maD3FXE/maxresdefault.jpg",
        "value": "$788,976,453"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "thumbnail": "https://i.ytimg.com/vi/i38PB4cQZxI/maxresdefault.jpg",
        "value": "$538,375,067"
    },
    {
        "title": "The Incredible Hulk (2008)",
        "thumbnail": "https://images.hdqwalls.com/download/the-incredible-hulk-1k-1280x720.jpg",
        "value": "$264,770,996"
    },
    {
        "title": "Spider-Man 3 (2007)",
        "thumbnail": "https://images8.alphacoders.com/457/457873.jpg",
        "value": "$894,983,373"
    },
    {
        "title": "Star Wars: Episode II - Attack of the Clones (2002)",
        "thumbnail": "https://static.sweet.tv/images/cache/movie_banners/BDJX6EQCMVXCAAQ=/16339-star-wars-episode-ii-attack-of-the-clones_1280x720.jpg",
        "value": "$653,779,970"
    },
    {
        "title": "Spider-Man: Homecoming (2017)",
        "thumbnail": "https://images.hdqwalls.com/download/spiderman-homecoming-2017-movie-qj-1280x720.jpg",
        "value": "$880,166,924"
    },
    {
        "title": "Man of Steel (2013)",
        "thumbnail": "https://eskipaper.com/images/man-of-steel-2013-movie-1.jpg",
        "value": "$668,045,518"
    },
    {
        "title": "Venom (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/venom-3d-digital-art-74-1280x720.jpg",
        "value": "$856,085,151"
    },
    {
        "title": "Avengers: Infinity War (2018)",
        "thumbnail": "https://images.hdqwalls.com/download/avengers-infinity-war-official-poster-2018-4o-1280x720.jpg",
        "value": "$2,048,359,754"
    },
    {
        "title": "Spider-Man: Far from Home (2019)",
        "thumbnail": "https://wallpaperaccess.com/full/1342814.jpg",
        "value": "$1,131,927,996"
    },
    {
        "title": "Deadpool (2016)",
        "thumbnail": "https://images.hdqwalls.com/download/deadpool-firing-6p-1280x720.jpg",
        "value": "$782,836,791"
    },
    {
        "title": "Spider-Man (2002)",
        "thumbnail": "https://wallpaperaccess.com/full/496545.jpg",
        "value": "$825,025,036"
    },
    {
        "title": "Batman Begins (2005)",
        "thumbnail": "http://wallpaperstock.net/batman-begins_wallpapers_10323_1280x720.jpg",
        "value": "$373,661,946"
    },
    {
        "title": "Guardians of the Galaxy (2014)",
        "thumbnail": "https://data.1freewallpapers.com/download/2014-guardians-of-the-galaxy-1280x720.jpg",
        "value": "$773,350,147"
    },
    {
        "title": "The Dark Knight (2008)",
        "thumbnail": "https://cdn.mos.cms.futurecdn.net/74JEtF4YHG4bRKb2mV6jJd.jpg",
        "value": "$1,005,973,645"
    },
    {
        "title": "Avengers: Endgame (2019)",
        "thumbnail": "https://uhdwallpapers.org/uploads/converted/19/04/21/avengers-endgame-1280x720_898598-mm-90.jpg",
        "value": "$2,797,501,328"
    },
]

let title1=document.getElementById("title1")
let value1=document.getElementById("value1")

let title2=document.getElementById("title2")
let value2=document.getElementById("value2")

let highBtn = document.getElementById("higher")
let lowBtn = document.getElementById("lower")

let column1 = document.getElementById("column1")
let column2 = document.getElementById("column2")

var score = 0;
var scoreboard = document.getElementById("scoreboard");

a = random()
b = random()
if (a == b && b !== 25) a = b + 1
else a = b - 1

function random() {
    r = Math.floor(Math.random()*25)
    return r
}
random(1)

title1.innerHTML=`${boFilms[a].title}`
value1.innerHTML=`${boFilms[a].value}`
column1.style.backgroundImage="url(" + boFilms[a].thumbnail

title2.innerHTML=`${boFilms[b].title}`
value2.innerHTML=`?`
column2.style.backgroundImage="url(" + boFilms[b].thumbnail

highBtn.addEventListener("click", function() {
    if (boFilms[b].value >= boFilms[a].value) {
        alert("Correct")
        scoreIncrease()
        c = random()

        title1.innerHTML=`${boFilms[b].title}`
        value1.innerHTML=`${boFilms[b].value}`
        column1.style.backgroundImage="url(" + boFilms[b].thumbnail

        title2.innerHTML=`${boFilms[c].title}`
        value2.innerHTML=`?`
        column2.style.backgroundImage="url(" + boFilms[c].thumbnail

        boFilms[b].title=boFilms[c].title
        boFilms[b].value=boFilms[c].value
        boFilms[b].thumbnail=boFilms[c].thumbnail
    }
    else {
        alert("Incorrect")
    }
})

lowBtn.addEventListener("click", function() {
    if (boFilms[b].value <= boFilms[a].value) {
        alert("Correct")
        scoreIncrease()
        c=random()

        title1.innerHTML=`${boFilms[b].title}`
        value1.innerHTML=`${boFilms[b].value}`
        column1.style.backgroundImage="url(" + boFilms[b].thumbnail

        title2.innerHTML=`${boFilms[c].title}`
        value2.innerHTML=`?`
        column2.style.backgroundImage="url(" + boFilms[c].thumbnail

        boFilms[b].title=boFilms[c].title
        boFilms[b].value=boFilms[c].value
        boFilms[b].thumbnail=boFilms[c].thumbnail
    }
    else {
        alert("Incorrect")
    }
})

function scoreIncrease() {
    score++;
    scoreboard.innerHTML = "Score: " + score;
}