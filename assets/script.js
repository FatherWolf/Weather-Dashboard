//api key -  1ed10a98890e19e15afbaf5804feabf8

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// var oneCall =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=1ed10a98890e19e15afbaf5804feabf8";

var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("search");

function getApi() {
  var oneCall =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=1ed10a98890e19e15afbaf5804feabf8";

  fetch(oneCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");

        listItem.textContent = data[i].text;

        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener("click", getApi);
