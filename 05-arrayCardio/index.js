const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed:1995},
  {first: 'Isaac', last: 'Newton', year: 1643, passed:1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed:1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed:1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed:1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed:1543},
  {first: 'Max', last: 'Planck', year: 1858, passed:1947}
]

$("#inventors").text(JSON.stringify(inventors, undefined, 2));

// array.prototype.filter()
// 1 filter the list of inventors for those who were born in the 1500s


// map
// 2 give us an array of the inverors first and last names


//sort
// 3 sort the inventors by birdthdate, oldest to youngest


// reduce
// 4 how many years did the inventors cumulatively live?


// 5 sort the inventors by years lived


// 6 create alist of boulevards in Paris that contain 'de' inywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7 sort exersize
// sort the people alphabetically by last name


//8 sum up the instances of each of these
const data = ['car','car', 'truck','truck','bike', 'walk', 'car', 'van', 'bike',
  'walk', 'car', 'van', 'car', 'truck']

