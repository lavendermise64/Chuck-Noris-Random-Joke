const button = document.getElementById("button");
const div = document.getElementById("div");
const generateRandomJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random").then(function (response) {
    response.json().then(function (data) {
      console.log(data.value);
      div.innerHTML = `
    <p>${data.value}</p>
    <p>Created on: ${data.created_at}
    `;
    });
  });
};
button.addEventListener("click", function (e) {
  e.preventDefault();
  generateRandomJoke();
});
window.addEventListener("load", function () {
  generateRandomJoke();
});
