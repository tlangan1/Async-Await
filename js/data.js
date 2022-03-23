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

function ChoiceManagement() {
  var ulEl = document.querySelector(".choices");
  var searchText = document.querySelector("#searchText");

  function buildChoices(originalSearchText) {
    ulEl.textContent = "";
    choices.forEach((holiday, idx) => {
      if (holiday.includes(originalSearchText)) {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
          idx + 1
        }</time><span>${holiday}</span>`;
        ulEl.append(liEl);
      }
    });

    console.log(
      "Search Complete! Original Search Text sent with http request: '" +
        originalSearchText +
        "'",
      "Current text in search control: '" + searchText.value + "'"
    );
  }
  return {
    buildChoices,
  };
}

export var buildChoices = ChoiceManagement().buildChoices;

buildChoices(document.querySelector("#searchText").value);
