let documentBody = document.querySelector("body");
let documentHeader = document.querySelector("#header");
let documentContent = document.querySelector("#content");
let documentList = documentContent.querySelector("ul");

async function createLinks() {
  let data = (await fetch("./index/data.json"))
    .json()
    .then((json) => Object.entries(json));

  for (obj of await data) {
    let array = obj[1];
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    let img = document.createElement("img");

    img.setAttribute("src", array["image_url"]);
    link.setAttribute("href", array["url"]);

    link.appendChild(img);
    listItem.appendChild(link);
    documentList.appendChild(listItem);
  }
}

createLinks();
