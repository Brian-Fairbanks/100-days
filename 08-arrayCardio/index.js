const answers = $(".answer");

const people = [
  {name:'Wes', year:1988},
  {name:'Kait', year:1986},
  {name:'Irv', year:1970},
  {name:'Lux', year:2015},
]

const comments =[
  {text:'love this', id:523423},
  {text:'Super good', id:684422},
  {text:'You are the best', id:781594},
  {text:'ramen is my favorite food ever', id:357878},
  {text:'FIRST!', id:492215},
  {text:'nice, nice, nice', id:242823}
]

const currentYear = (new Date()).getFullYear();




$("#people").append(table(people));
$("#people").append(`<div> Current Year : ${currentYear} </div>`);

$("#comments").append(table(comments));



// 1  -  is at least one person 19?

// true if any one is over 19
const qone = people.some(person => currentYear-person.year >= 19);
$(answers[0]).text(qone);



// 2  -  is everyone 19?

const qtwo = people.every(person => currentYear-person.year >= 19);
$(answers[1]).text(qtwo);

// 3  -  what is the comment with id "357878"

const qthree = comments.find(comment => comment.id == 357878);
$(answers[2]).text(JSON.stringify(qthree));

// 4  -  Delete comment id "357878" from the table

const indexToRemove = comments.findIndex(comment => comment.id == 357878);
comments.splice(indexToRemove, 1);
$(answers[3]).append(table(comments));



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