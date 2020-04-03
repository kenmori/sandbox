function component(){
  const element = document.createElement("div")
  const arr = ["hello", "webpack"]
  element.innerHTML = _.join(arr, "");

  return element;
}

document.body.appendChild(component())