//Search Input of staff List
const patients = [
  {
    id: 574,
    name: "Ranni",
    gender: "female",
    age: 20,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
  {
    id: 575,
    name: "Malenia",
    gender: "female",
    age: 25,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
  {
    id: 576,
    name: "Godfrey",
    gender: "male",
    age: 40,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
  {
    id: 577,
    name: "Radagon",
    gender: "male",
    age: 20,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
  {
    id: 578,
    name: "Queen Marika",
    gender: "female",
    age: 20,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
  {
    id: 579,
    name: "Radahn",
    gender: "male",
    age: 20,
    bloodGroup: "O+",
    treatment: "Diabetes",
    mobile: "78293847",
  },
];

function searchPatient() {
  const input = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const resultElement = document.getElementById("result");

  const patient = patients.find((p) => p.name.toLowerCase() === input);

  if (patient) {
    resultElement.textContent = `Found: ${patient.name}, Age: ${patient.age}, Gender: ${patient.gender}, Blood Group: ${patient.bloodGroup}`;
  } else {
    resultElement.textContent = "undefined";
  }
}

const deleteButtons = document.querySelectorAll(".deleteBtn");

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    row.remove();
  });
});
