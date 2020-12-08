const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(function(panel){
  console.log("Adding listener")
  panel.addEventListener("mouseover", e => {
    panels.forEach(each => {each.classList.remove("active")})
    panel.classList.add("active");
  })
})