# TDD

Describe: Place();

Test: "Creates instance of place object when called with the new operator"
Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
Expected Output: portland = { city: "Portland", timeOfYear: "Summer", bestRest: "Laangbahn" }

Test: "Append note with .note() method to instance of place object"
Code:
let portland = new Place("Portland", "Summer", "Laangbahn");
portland.note("Great place love the vibe")
Expected Output: portland = {city: "Portland", timeOfYear: "Summer", bestRest: "Laangbahn", note: "Great place love the vibe" }

Describe: GuideBook()

Test: "Add Place instance into GuideBook object"
Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
let nyc = new Place("New York City", "Fall", "Coarse");
let guideBook = new GuideBook();
guideBook.addPlace(portland);
guideBook.addPlace(nyc);
Expected Output: guideBook = { Portland: Place, New York City: Place }

 Test: "assign specific number ID to each added instance of place into Guidebook"
 Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
let nyc = new Place("New York City", "Fall", "Coarse");
let guideBook = new GuideBook();
guideBook.addPlace(portland);
guideBook.addPlace(nyc);
Expected Output: guideBook = {1: Place, 2: Place}

