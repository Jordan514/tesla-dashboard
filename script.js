let documentBody = document.querySelector("body");
let documentHeader = document.querySelector("#header");
let documentContent = document.querySelector("#content");
let documentList = documentContent.querySelector("ul");

let arrayOfLinks = [
  "https://www.youtube.com",
  "https://www.netflix.com",
  "https://www.max.com",
];
for (url of arrayOfLinks) {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  link.setAttribute("href", url);
  link.textContent = url; //replace with name once objects complete
  listItem.appendChild(link);
  documentList.appendChild(listItem);
}

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
