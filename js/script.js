function GuideBook() {
    this.places = {};
    this.currentId = 0;
}

GuideBook.prototype.addPlace = function(place) {
    this.places[this.assignId()]=place;
}

GuideBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

function Place(city, timeOfYear, bestRest) {
    this.city = city;
    this.timeOfYear = timeOfYear;
    this.bestRest = bestRest;
}