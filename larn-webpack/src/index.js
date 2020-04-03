function component (){
  const element = document.createElement("div")
  const arr = ["hello", "webpack"]
  element = _.join(arr, "");

  return element;
}

document.body.appendChild(component())