const projectWell = $(".wrapperContent");

projects.forEach(project => {
  let curDiv = $("<a>", {class:"project", href:`${project.src}index.html`});
  curDiv.append($("<div>", {class:"imgWrap"})
    .append($("<img>",{class:"img", src:`${project.src}image.jpg`}))
  )
  curDiv.append($(`<div>`,{class:"name"}).append(project.name));
  projectWell.append(curDiv);
  console.log(curDiv);
})