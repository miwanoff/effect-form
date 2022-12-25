let labels = document.querySelectorAll("label");
for (let i = 0; i < labels.length; i++) {
  let time = 0;
  console.log(labels[i].innerHTML);
  let myArray = labels[i].innerHTML.split("");
  console.log(myArray);
  let newInnerHTML = "";
  for (let j = 0; j < myArray.length; j++) {
    let element = `<span style="transition-delay:${time}ms;">${myArray[j]}</span>`;
    console.log(element);
    newInnerHTML += element;
    time += 50;
  }
  console.log(newInnerHTML);
  labels[i].innerHTML = newInnerHTML;
}