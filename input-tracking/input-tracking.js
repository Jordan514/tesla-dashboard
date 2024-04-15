// Capture mouse events
document.addEventListener("click", function (event) {
  createCard("Mouse clicked at (" + event.clientX + ", " + event.clientY + ")");
});

// document.addEventListener("mousemove", function (event) {
//   createCard("Mouse moved at (" + event.clientX + ", " + event.clientY + ")");
// });

// Capture keyboard events
document.addEventListener("keydown", function (event) {
  createCard("Key pressed: " + event.key);
});

document.addEventListener("keyup", function (event) {
  createCard("Key released: " + event.key);
});

// Capture touch events
document.addEventListener("touchstart", function (event) {
  createCard(
    "Touch started at (" +
      event.touches[0].clientX +
      ", " +
      event.touches[0].clientY +
      ")"
  );
});

document.addEventListener("touchmove", function (event) {
  createCard(
    "Touch moved at (" +
      event.touches[0].clientX +
      ", " +
      event.touches[0].clientY +
      ")"
  );
});

// Capture form events
document.addEventListener("input", function (event) {
  createCard("Input value changed: " + event.target.value);
});

document.addEventListener("submit", function (event) {
  createCard("Form submitted");
  event.preventDefault(); // Prevent default form submission
});

// Capture window events
window.addEventListener("resize", function (event) {
  createCard("Window resized");
});

window.addEventListener("scroll", function (event) {
  createCard("Window scrolled");
});

// Add more event listeners for specific actions you want to capture
// Note: This code captures only a subset of possible events and may not cover all scenarios.

//Next we need to create a card everytime an event listener is activated
function createCard(stringOfEvent) {
  if (toggleCardCreator == true) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.textContent = stringOfEvent;
    document.querySelector("#cardHolder").appendChild(card);
  }
}

//Then add the ability to turn off card creation
let toggleCardCreator = false;
document.querySelector("button").addEventListener("click", () => {
  toggleCardCreator = !toggleCardCreator;
});
