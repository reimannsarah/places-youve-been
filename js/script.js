function GuideBook() {
    this.places = {};
    this.currentId = 0;
}

GuideBook.prototype.addPlace = function(place) {
    this.places[this.assignId()]=place;
};

GuideBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
};

GuideBook.prototype.searchId = function(id){
    if (this.places[id] !== undefined){
    return this.places[id];
    }
    return false;
};

// GuideBook.prototype.searchCity = function(cityName) {
//     const ids = Object.keys(this.places);
//     console.log(ids);
//     ids.forEach(function (id){
//         if (this.places[id].city === cityName){
//             return this.places[id];
//         }
//     })
    
    // this.places.forEach(function(place) {
    //     if (this.city === cityName) {
    //         return place;
    //     }
    // });
// };

function Place(city, timeOfYear, bestRest) {
    this.city = city;
    this.timeOfYear = timeOfYear;
    this.bestRest = bestRest;
}

Place.prototype.note = function(note) {
    this.note = note;
};

let guideBook = new GuideBook()

function userInput(e){
    e.preventDefault();
    const city = document.getElementById("cityName").value;
    const timeOfYear = document.getElementById("timeOfYear").value;
    const bestRest = document.getElementById("bestRest").value;

    let place = new Place(city, timeOfYear, bestRest);
    guideBook.addPlace(place);
    displayPlaces();
}

function displayPlaces() {
    const display = document.getElementById("placeCards");
    const ids = Object.keys(guideBook.places);
    let card = document.createElement("div");
    card.setAttribute("class", "card")
    let pCity = document.createElement("p");
    let pTimeOfYear = document.createElement("p");
    let pbestRest = document.createElement("p");
    console.log(ids);
    ids.forEach(function(id){
        if (id === ids.length.toString()){            
            pCity.append(guideBook.places[id].city);
            pTimeOfYear.append(guideBook.places[id].timeOfYear);
            pbestRest.append(guideBook.places[id].bestRest);
            card.append(pCity, pTimeOfYear, pbestRest);
            display.append(card);
        };
    });

}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", userInput)
})