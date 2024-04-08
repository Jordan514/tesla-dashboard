let documentBody = document.querySelector("body");
let documentHeader = document.querySelector("#header");
let documentContent = document.querySelector("#content");
let documentList = documentContent.querySelector("ul");

async function createLinks() {
  let json = (await fetch("./data.json"))
    .json()
    .then((json) => Object.entries(json));

  for (obj of await json) {
    let array = obj[1];
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", array["url"]);
    link.textContent = array["name"]; //replace with name once objects complete
    listItem.appendChild(link);
    documentList.appendChild(listItem);
    console.log(array["name"]);
  }
}

createLinks();
