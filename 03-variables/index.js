const inputs = document.querySelectorAll("input");
const imgs = document.querySelectorAll("button");

const title = $("#title");
const credit = $("#credit");

function handleUpdate(){
  const suffex=this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffex)

  if(this.dataset.title){ console.log("change the title!"); title.text(this.dataset.title);}
  if(this.dataset.credit){credit.text(this.dataset.credit);}
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

imgs.forEach(input => input.addEventListener("click", handleUpdate));
