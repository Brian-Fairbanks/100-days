const projectWell = $(".wrapperContent");

// will take a number, and pad it's start with 0s to a specific length, and return it as a string
function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
      str = '0' + str;
  }
  return str;
}

// will empty an element, and fill it with project tiles
function fillProjects(el){
  el.empty();

  projects.forEach(project => {
    let curDiv = $("<a>", {class:"project", href:`${project.src}index.html`});

    curDiv.append($("<div>", {class:"imgWrap"})
      .append($("<img>",{class:"img", src:`${project.src}image.jpg`}))
    )
    curDiv.append($(`<div>`,{class:"name"})
      .append(`${project.name}`)
    );

    curDiv.append($(`<div>`,{class:"number"})
    .append(`#${pad(project.number, 3)}`)
  );

    el.append($("<div>",{class:"projectWrapper"})
      .append(curDiv)
    )
  })
}

fillProjects(projectWell);
