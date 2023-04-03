function GuideBook() {
    this.places = {};
}

GuideBook.prototype.addPlace = function(place) {
    this.places[place.city] = place;
}

function Place(city, timeOfYear, bestRest) {
    this.city = city;
    this.timeOfYear = timeOfYear;
    this.bestRest = bestRest;
}