const inputs = document.querySelectorAll("input");

function handleUpdate(){
  const suffex=this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffex)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
