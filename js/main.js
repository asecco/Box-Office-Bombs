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

let boFilms = [
    {
        "title": "Star Wars: Episode IV - A New Hope (1977)",
        "value": "$775,398,007"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back (1980)",
        "value": "$538,375,067"
    },
    {
        "title": "Star Wars: Episode VI - Return of the Jedi (1983)",
        "value": "$475,106,177"
    },
    {
        "title": "Star Wars: Episode I - The Phantom Menace (1999)",
        "value": "$1,027,082,707"
    },
    {
        "title": "Star Wars: Episode II - Attack of the Clones (2002)",
        "value": "$653,779,970"
    },
    {
        "title": "Star Wars: Episode III - Revenge of the Sith (2005)",
        "value": "$868,390,560"
    },
    {
        "title": "Avengers (2012)",
        "value": "$1,518,815,515"
    },
    {
        "title": "Avengers: Age of Ultron (2015)",
        "value": "$1,402,809,540"
    },
    {
        "title": "Captain America: The First Avenger (2011)",
        "value": "$370,569,774"
    },
    {
        "title": "Captain America: The Winter Soldier (2014)",
        "value": "$714,421,503"
    },
    {
        "title": "The Incredible Hulk (2008)",
        "value": "$264,770,996"
    },
    {
        "title": "Spider-Man (2002)",
        "value": "$825,025,036"
    },
    {
        "title": "Spider-Man 2 (2004)",
        "value": "$788,976,453"
    },
    {
        "title": "Spider-Man 3 (2007)",
        "value": "$894,983,373"
    },
    {
        "title": "Spider-Man: Homecoming (2017)",
        "value": "$880,166,924"
    },
    {
        "title": "Spider-Man: Far from Home (2019)",
        "value": "$1,131,927,996"
    },
    {
        "title": "Venom (2018)",
        "value": "$856,085,151"
    },
    {
        "title": "Avengers: Infinity War (2018)",
        "value": "$2,048,359,754"
    },
    {
        "title": "Avengers: Endgame (2019)",
        "value": "$2,797,501,328"
    },
    {
        "title": "Man of Steel (2013)",
        "value": "$668,045,518"
    },
    {
        "title": "Deadpool (2016)",
        "value": "$782,836,791"
    },
    {
        "title": "Batman Begins (2005)",
        "value": "$373,661,946"
    },
    {
        "title": "The Dark Knight (2008)",
        "value": "$1,005,973,645"
    },
    {
        "title": "The Dark Knight Rises (2012)",
        "value": "$1,081,142,612"
    },
    {
        "title": "Guardians of the Galaxy (2014)",
        "value": "$773,350,147"
    },
]

let title1=document.getElementById("title1")
let value1=document.getElementById("value1")

let title2=document.getElementById("title2")
let value2=document.getElementById("value2")

let highBtn = document.getElementById("higher")
let lowBtn = document.getElementById("lower")

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

title2.innerHTML=`${boFilms[b].title}`
value2.innerHTML=`${boFilms[b].value}`

highBtn.addEventListener("click", function() {
    if (boFilms[b].value >= boFilms[a].value) {
        alert("Correct")
        scoreIncrease()
        c = random()

        title1.innerHTML=`${boFilms[b].title}`
        value1.innerHTML=`${boFilms[b].value}`

        title2.innerHTML=`${boFilms[c].title}`
        value2.innerHTML=`${boFilms[c].value}`

        boFilms[b].title=boFilms[c].title
        boFilms[b].value=boFilms[c].value
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

        title2.innerHTML=`${boFilms[c].title}`
        value2.innerHTML=`${boFilms[c].value}`

        boFilms[b].title=boFilms[c].title
        boFilms[b].value=boFilms[c].value
    }
    else {
        alert("Incorrect")
    }
})

function scoreIncrease() {
    score++;
    scoreboard.innerHTML = "Score: " + score;
}