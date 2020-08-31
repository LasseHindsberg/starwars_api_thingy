let url = new URLSearchParams(window.location.search);
let page = url.get("page") ? url.get("page") : 1;
let prevPage, nextPage;

let nextLink = document.querySelector(".nextLink");
let prevLink = document.querySelector(".prevLink");

let spinner = document.querySelector(".spinner");



fetch(`https://swapi.dev/api/people?page=${page}`)
    .then(res => res.json())
    .then(function (data) {
        
        console.log(data);
        spinner.remove();

        let pages = Math.ceil(data.count / 10);

        
        nextPage = page >= pages ? pages : parseInt(page) + 1;
        prevPage = page <= 1 ? 1 : parseInt(page) - 1;
        
        nextLink.href = `?page=${nextPage}`;
        prevLink.href = `?page=${prevPage}`;


        let ul = document.querySelector(".characterList");
        let template = document.querySelector("#template");


        data.results.forEach(result => {
            let array = result.url.split("/");
            let id = array[array.length - 2];

            let clone = template.content.cloneNode(true);
            clone.querySelector(".listItem").innerText = result.name;
            clone.querySelector(".listItem").href = `/character-sheet.html?id=${id}`;
            ul.appendChild(clone);
        });

    });
fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(res => res.json())
    .then(function (data) {


        let ul = document.querySelector(".planetList");
        let template = document.querySelector("#template");


        data.results.forEach(result => {
            let array = result.url.split("/");
            let id = array[array.length - 2];

            let clone = template.content.cloneNode(true);
            clone.querySelector(".listItem").innerText = result.name;
            clone.querySelector(".listItem").href = `/planet-sheet.html?id=${id}`;
            ul.appendChild(clone);
        });

    });

window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})