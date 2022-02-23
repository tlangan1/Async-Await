// import { febHolidays } from "./carousel-data.js";
// var x = febHolidays[0];

import { buildSelections } from "./carousel-data.js";

async function search() {
  (function () {
    setTimeout(
      buildSelections,
      Math.floor(Math.random() * 3000),
      document.querySelector("#searchText").value
    );
  })();
  console.log("Searching");
}

document.querySelector("#searchText").addEventListener("keyup", (e) => {
  search();
});
