let url = new URLSearchParams(window.location.search);

// console.log(url);

if (url.has("id")) {

    fetch(`https://swapi.dev/api/people/${url.get("id")}`)
    .then (res => res.json())
    .then(function(data) {
        let name = document.querySelector(".characterName");
        name.innerText = data.name;
        let gender = document.querySelector(".characterGender");
        gender.innerText = data.gender;
        let birthyear = document.querySelector(".characterBirthYear");
        birthyear.innerText = data.birth_year;
        // let planet = document.querySelector(".characterHomeWorld");
        // planet.innerText = data.homeworld;
        let height = document.querySelector(".characterHeight");
        height.innerText = data.height;
        let mass = document.querySelector(".characterWeight");
        mass.innerText = data.mass;
        let hairColor = document.querySelector(".characterHairColor");
        hairColor.innerText = data.hair_color;
        
        
        console.log(data);
    });
    
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})