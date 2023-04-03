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