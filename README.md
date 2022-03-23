# Async Await Solution to Seach Box

## This project should demonstrate the weekness of Aync Await by itself to deal with asynchronous responses comming out of order. To accomplish this I will have a timer with random timer vaues delay the reponses. initially I will use the hard-coded list of February holidays found in the carousel-data.js file. I will treat that file as a module and access the array from the JavaScript file, search-box.js.

### Steps:

This is currently located at "D:\Computer Science\JavaScript\Front End Use Cases\Search Box\Async-Await" locally

1. Export the choices array in data.js and import it to search-box.js.
1. Create a function that wraps around a setTimeout with a random duration between 0 and 3 seconds in search-box.js.
1. Have the function that updates the list close over the list element reference.

1. Alter the logic to allow for differing numbers of items in the list to function properly...including zero items.
1. Have buildChoices be called on page load instead of hardcoded in the script.

### Notes:

- Only form elements with name atributes will have their values passed when submitting a form
