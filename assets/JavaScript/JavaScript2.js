var typeCare = document.getElementById("typeCare");
var zipCode = document.getElementById("zipCode");
var animalInput = document.getElementById("animal-input");
var careInput = document.getElementById("care-input");
var animalType = document.getElementById("typeAnimal");
var enterButton = document.getElementById("enterBtn");
var groomers = document.getElementById("groomers");
var veterinarian = document.getElementById("veterinarian");

enterButton.addEventListener("click", function(e) {
    e.preventDefault();

    if (animalInput == "" || careInput == "" || zipCode == "") {
        alert("Please enter info in all fields");
    }
})

if (animalInput.value == "" || animalInput.value == null) {

}
