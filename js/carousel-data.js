const choices = [
  "Dark Chocolate Day",
  "Groundhog Day",
  "Carrot Cake Day",
  "Wear Red Day",
  "Weatherperson's Day",
  "Chopsticks Day",
  "Periodic Table Day",
  "Kite Flying Day",
  "Pizza Day",
  "Umbrella Day",
  "Inventor's Day",
  "Global Movie Day",
  "Tortellini Day",
  "Valentine's Day",
  "Gumdrop Day",
  "Do a Grouch a Favor Day",
  "Cabbage Day",
  "Battery Day",
  "Chocolate Mint Day",
  "Love Your Pet Day",
  "President's Day",
  "Cook a Sweet Potato Day",
  "Tile Day",
  "Toast Day",
  "Clam Chowder Day",
  "Pistachio Day",
  "Polar Bear Day",
  "Tooth Fairy Day",
];

var daynumber = new Date().getDate();
var activeIndex = daynumber - 1;

function setup() {
  var daynumber = new Date().getDate();
  var activeIndex = daynumber - 1;
  const rotate = -360 / choices.length;
}

buildSelections(document.querySelector("#searchText").value);

export function buildSelections(searchText) {
  var ulEl = document.querySelector(".choices");

  ulEl.textContent = "";
  choices.forEach((holiday, idx) => {
    if (holiday.includes(searchText)) {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    }
  });

  const rotate = -360 / choices.length;
  ulEl.style.setProperty("--rotateDegrees", rotate);
  console.log("Search Complete: " + searchText);
  adjustDay(0);
}

function adjustDay(nr) {
  var ulEl = document.querySelector(".choices");

  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);

  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");

  activeIndex = (activeIndex + nr + choices.length) % choices.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor =
    window.getComputedStyle(newActiveEl).backgroundColor;

  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});

document.querySelector(".decrease").addEventListener("click", (e) => {
  adjustDay(-1);
});

document.querySelector(".increase").addEventListener("click", (e) => {
  adjustDay(1);
});
