let spinner = document.querySelector(".spinner");

let url = new URLSearchParams(window.location.search);
if (url.get("keyword")) {
    fetch(`https://swapi.dev/api/people?search=${url.get("keyword")}`)
    .then(res =>res.json())
    .then(function(data) {
        spinner.remove();

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
        console.log(data.results)
    });

    
}