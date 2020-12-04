let numerals = document.querySelectorAll(".numeral")

// align numerals arround clock face
numerals.forEach((num, index)=> {
  console.log(index + " - " + num.innerHTML);
  let rotation = (360/12)*((index+1)%12);
  num.style.transform = "rotate("+rotation+"deg)";
});

