const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  // data validation
  e.preventDefault();
  const password = document.getElementById("password");
  const computerScience = document.getElementById("computerScience");
  const informationTechnology = document.getElementById(
    "informationTechnology",
  );
  const computerArchitecture = document.getElementById("computerArchitecture");
  const teleCommunication = document.getElementById("teleCommunication");

  const selectElement = document.getElementById("selectElement");

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");

  const dateInput = document.getElementById("dob");

  const areaPIN = document.getElementById("areaPIN");

  const mobile = document.getElementById("mobile");

  //to check max length of FN and LN
  if (firstName.value.length > 50 || lastName.value.length > 100) {
    alert("Names are too long! Try short values.");
    return;
  }

  //to check if mobile is number and length is 10
  if (!Number.isInteger(Number(mobile.value))) {
    alert("Put the mobile as integer number!");
    return;
  } else {
    if (mobile.value.length > 10) {
      alert("Put the mobile number to me at most 10 digits!");
      return;
    }
  }

  //to check if dob choosed
  if (dateInput.value === "") {
    alert("Choose ur date of birth!");
    return;
  }

  //to check if pin is number
  if (!Number.isInteger(Number(areaPIN.value))) {
    alert("Put the PIN as integer number!");
    return;
  }

  //to chack qualification
  if (
    selectElement.value !== "highSchool" &&
    selectElement.value !== "diploma" &&
    selectElement.value !== "bachelor" &&
    selectElement.value !== "master" &&
    selectElement.value !== "phd"
  ) {
    alert("U must choose a Qualification!");
    return;
  }

  //to check specialization
  if (
    !computerScience.checked &&
    !informationTechnology.checked &&
    !computerArchitecture.checked &&
    !teleCommunication.checked
  ) {
    alert("U must check at least one Specialization!");
    return;
  }

  //to chack password
  if (password.value.length < 8) {
    //since each pass must be at least 8 chars
    alert("Incorrect Password, it must > 8 chars!\n Try Again!");
    return;
  }

  const params = new URLSearchParams();
  params.append("firstName", firstName.value);
  params.append("lastName", lastName.value);
  const queryString = params.toString();
  const url = `welcomePage.html?${queryString}`;

  alert("Form submitted successfully");

  // Navigate to the second page
  window.location.href = url;
});
