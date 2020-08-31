let url = new URLSearchParams(window.location.search);

if (url.get("keyword")) {
    fetch("https://swapi.dev/api/people/")
    .then(res =>res.json())
    .then(function(data) {
        let results = data.results;
        // console.log(results);

        let matches = results.filter(function(result) {
            return result.name.includes(url.get("keyword").toLowerCase());
        })

        console.log(matches)
    });
}