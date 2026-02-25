function changeColor(color) {
  const p = document.getElementById("name");
  p.style.color = color;
}

const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");
document.getElementById("name").innerText = firstName + " " + lastName;
