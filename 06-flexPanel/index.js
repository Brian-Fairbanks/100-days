const panels = document.querySelectorAll(".panel");
console.log(panels);

function toggleActive(e){
  panels.forEach(each => {each.classList.remove("active")})
  this.classList.add("active");
}

function toggleOpen(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle("open");
  }
}

panels.forEach(function(panel){
  console.log("Adding listener")
  panel.addEventListener("click", toggleActive)
  panel.addEventListener("transitionend", toggleOpen)
})