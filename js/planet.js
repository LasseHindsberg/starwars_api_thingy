let url = new URLSearchParams(window.location.search);

console.log(url);

if (url.has("id")) {

    fetch(`https://swapi.dev/api/planets/${url.get("id")}`)
    .then (res => res.json())
    .then(function(data) {
        console.log(data);
        let name = document.querySelector(".planetName");
        name.innerText = data.name;
        let climate = document.querySelector(".planetClimate");
        climate.innerText = data.climate;
        let terrain = document.querySelector(".planetTerrain");
        terrain.innerText = data.terrain;
        let population = document.querySelector(".planetPopulation");
        population.innerText = data.population;
        let gravity = document.querySelector(".planetGravity");
        gravity.innerText = data.gravity;
        let orbit = document.querySelector(".planetOrbit");
        orbit.innerText = data.orbital_period;
        // let water = document.querySelector(".planetWater");
        // water.innerText = data.surface_water;
        
        
    });



    
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})};