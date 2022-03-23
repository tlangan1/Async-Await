import { buildChoices } from "./data.js";

async function search() {
  (function () {
    setTimeout(
      buildChoices,
      Math.floor(Math.random() * 3000),
      document.querySelector("#searchText").value
    );
  })();
  console.log("Searching");
}

document.querySelector("#searchText").addEventListener("keyup", (e) => {
  search(document.querySelector("#searchText").value);
});
