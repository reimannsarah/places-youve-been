# TDD

Describe: Place();

Test: "Creates instance of place object when called with the new operator"
Code: 
let portland = new Place("Portland", "Summer", "Laangbahn");
Expected Output: portland = { city: "Portland", timeOfYear: "Summer", bestRest: "Laangbahn" }