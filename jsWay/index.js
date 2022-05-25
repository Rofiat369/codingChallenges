//Write a program that accepts an input of day from the user
//then shows the user the name of the following day

document.querySelector(".entered").addEventListener("click", (e) => {
  let inputs = document.querySelector(".word").value.toLowerCase();
  switch(true){
    case inputs === "monday":
     return document.getElementById('placeText').textContent = "Tuesday";

    case inputs === "tuesday":
      return document.getElementById('placeText').textContent = "Wednesday"

    case inputs === "wednesday":
      return document.getElementById('placeText').textContent = "Thursday"

    case inputs === "thursday":
      return document.getElementById('placeText').textContent = "Friday"

    case inputs === "friday":
      return document.getElementById('placeText').textContent ="Saturday"

    case inputs === "saturday":
      return document.getElementById('placeText').textContent = "Sunday"

    case inputs === "sunday":
      return document.getElementById('placeText').textContent = "Monday"
  }
});

//const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
