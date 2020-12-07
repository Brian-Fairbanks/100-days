const answers = $(".answer");
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people =[
'Benas Petersen',
'Amrit Salgado',
'Cleo Humphreys',
'Avi Guzman',
'Ephraim Neale',
'Khadijah Randall',
'Alena Beck',
'Aleesha Foreman',
'Zoe Burgess',
'Hisham Clayton',
'Jayden Myers',
'Diana Graham',
'Arianne Whittle',
'Ritik Chapman',
'Paddy Burch',
'Beau Stanley',
'Khushi Squires',
'Ayrton Findlay',
'Jeffrey Pitt',
'Gia Santana',
'Leela Lowe',
'Shakir Parsons',
'Gus Ahmed',
'Konnor Calhoun',
'Saeed Atkinson',
'Maksymilian Esquivel',
'Asiya Cabrera',
'Chyna Childs',
'Emmeline Cooke',
'Kenneth Goff'
]

$("#inventors").append(table(inventors));

// array.prototype.filter()
// 1 filter the list of inventors for those who were born in the 1500s

let fifteen = inventors.filter(person => person.year >= 1500 && person.year < 1600)
$(answers[0]).append(table(fifteen))

// map
// 2 give us an array of the inventors first and last names

let invMap = inventors.map(person => person.first +" "+ person.last );
console.log(invMap);
$(answers[1]).append(array(invMap))

//sort
// 3 sort the inventors by birdthdate, oldest to youngest

let birthSort = inventors.sort( (a, b) => a.year>b.year?1:-1);

$(answers[2]).append(table(birthSort))



// reduce
// 4 how many years did the inventors cumulatively live?

let yearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

$(answers[3]).text(`${yearsLived} years.`)

// 5 sort the inventors by years lived

let oldest = inventors.sort( (a,b) => a.passed-a.year > b.passed-b.year ? -1: 1);
$(answers[4]).append(table(oldest));

// 6 create a list of boulevards in Paris that contain 'de' inywhere in the name
// https://commons.wikimedia.org/wiki/Category:Boulevards_in_Paris

// let category = document.querySelector(".mw-category");
// let links = [...category.querySelectorAll("a")];
// let de = links
//   .map(link => link.textContent)
//   .filter(name => name.includes('de'));


// 7 sort exersize
// sort the people alphabetically by last name

$(answers[6]).append(array(people));
let sorted = people.sort((a, b) => a.split(" ")[1] > b.split(" ")[1] ? 1:-1);
$(answers[6]).append(array(sorted));


//8 sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
  'walk', 'car', 'van', 'car', 'truck']

  const transport = data.reduce(function(obj, item) {
    if(!obj[item]){obj[item]=0}
    obj[item]++;
    return obj;
    },{});

  $(answers[7]).text(JSON.stringify(transport));



function table(arr) {
  let table = jQuery('<table>', {
    "class": 'table'
  })
  let head=false;

  for (let obj of arr) {
    let row = jQuery('<tr>');
    let th = jQuery('<tr>');
    for (let el in obj){
      th.append(`<th>${el}</th>`);
      row.append(`<td>${obj[el]}</td>`);
    }
    if(!head){
      table.append(th);
      head=true;
    }
    table.append(row);
  }

  return table;
}

function array(arr) {
  let table = jQuery('<table>', {
    "class": 'table'
  })

  for (let obj of arr) {
    table.append(`<tr><td>${obj}</td></tr>`);
  }

  return table;
}