# TDD

Describe: Place();

Test: "Creates instance of place object when called with the new operator"
Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
Expected Output: portland = { city: "Portland", timeOfYear: "Summer", bestRest: "Laangbahn" }

Describe: GuideBook()

Test: "Add Place instance into GuideBook object"
Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
let nyc = new Place("New York City", "Fall", "Coarse");
let guideBook = new GuideBook();
guideBook.addPlace(portland);
guideBook.addPlace(nyc);
Expected Output: guideBook = { Portland: Place, New York City: Place }

