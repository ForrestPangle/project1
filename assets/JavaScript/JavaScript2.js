var typeCare = document.getElementById("typeCare");
var zipCode = document.getElementById("zipCode");
var animalInput = document.getElementById("animal-input");
var animalType = document.getElementById("typeAnimal");
var enterButton = document.getElementById("enterBtn");
var groomers = document.getElementById("groomers");
var veterinarian = document.getElementById("veterinarian");
var nextBtn = document.getElementById("nextBtn");

var petAPI = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtZ09zcGo3ZTBQcXhjbUxVM20waTg4Yzlxc1YxTTRMdFJ2a2tpU0ZDZENPYmhIZHp6QyIsImp0aSI6IjJhODRhYmEzNjEwM2YyOGNhMjgzNzIyYjc0YWM1OWZiMWY0YTg4Y2Q0OWU1OGFiN2JiZjZhMWFhNTEyOTIyNjFiMWUzMzk4M2RiYzIyYjA1IiwiaWF0IjoxNjMxOTg1MTIxLCJuYmYiOjE2MzE5ODUxMjEsImV4cCI6MTYzMTk4ODcyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.rsCGvOWzYfJyM78A1mjuQ94ftWzGV-Obrct28S_p9flFlGhh6LiQ9aPUhunk3hrdsixwiDsonwrwXJ71yb6ewMzZSkNNmllFMn_ua83FR99F40eElZQTsy81K50k4-U5OCNOtIoPcxxdbnyonJFGcGTzpZ4PJTw8S8Pfy8FVIBnTdZigx81TviHZAeNnP8Ev81P9WzPh7FdqqQV4sSNFVwLiDBRHLZ-3bCgB6wOwc31oBCb807ixzePcu7h-o67_UUMjqYXOi6Do_qgPlsdusFm1shAyNbUtz7afk2cQFXeFv0PSoKZXhjxUfWjN99ssMNtiztgeL5USsYYj1PB89Q";
var zipAPI = "XUz25Av4wCWSh43hVoEGaLAQn0u5L6sOsDXy7HJQdOA8MV1p0ZroUKC940xmkiMF";
window.localStorage.setItem("animal", animalType.value);
window.localStorage.setItem("care", typeCare.value);
window.localStorage.setItem("zipCode", zipCode.value);

enterButton.addEventListener("click", function(e) {
    e.preventDefault();

    var enteredAnimal = window.localStorage.getItem("animal");
    var enteredCare = window.localStorage.getItem("care");
    var enteredZipCode = window.localStorage.getItem("zipCode");

    petFinder();
    renderZipCode();
    
    window.location = "https://forrestpangle.github.io/project1/index3.html";
})

// if (animalInput.value == "" || animalInput.value == null) {

// }

function petFinder() {
    var petURL = "https://api.petfinder.com/v2/oauth2/token";
    fetch(petURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: 'grant_type=client_credentials&client_id=mgOspj7e0PqxcmLU3m0i88c9qsV1M4LtRvkkiSFCdCObhHdzzC&client_secret=9GqSKXaGMYjrSSGV4UhGoULFuE7QyIagVG8RkFlm'
     })
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var animalURL = "https://api.petfinder.com/v2/animals"
        fetch(animalURL, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + data.access_token
              },
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })

    })
}

function renderZipCode() {
    var easy = zipCode.value;
    var zipURL = "https://www.zipcodeapi.com/rest/" + zipAPI + "/info.json/" + easy + "/mile";
    fetch(zipURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })

}




