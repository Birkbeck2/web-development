let numCats = 3;
let numDogs = 2;
// #region snippet
function pets(cats, dogs){
    return cats + dogs;
}
// #endregion snippet
// #region snippet1
pets(numCats, numDogs);
// #endregion snippet1
// #region snippet2
let numPets = pets(numCats, numDogs);
console.log(numPets);
// #endregion snippet2