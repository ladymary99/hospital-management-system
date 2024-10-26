//showing the submited information
window.onload = function () {
  loadFormData();
  loadDiagnosisData();
};

// saving in local storage
document
  .getElementById("medicalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    saveFormData();
  });

//function for saving in local
function saveFormData() {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const job = document.getElementById("job").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  
  const medicalData = {
    name,
    lastName,
    age,
    gender,
    job,
    email,
    phoneNumber,
  };

  localStorage.setItem("medicalData", JSON.stringify(medicalData));
}

// loads the saved data
function loadFormData() {
  const medicalData = JSON.parse(localStorage.getItem("medicalData"));
  if (medicalData) {
    document.getElementById("name").value = medicalData.name || "";
    document.getElementById("lastName").value = medicalData.lastName || "";
    document.getElementById("age").value = medicalData.age || "";
    document.getElementById("gender").value = medicalData.gender || "Male";
    document.getElementById("job").value = medicalData.job || "";
    document.getElementById("email").value = medicalData.email || "";
    document.getElementById("phoneNumber").value =
      medicalData.phoneNumber || "";
  }
}

// add diagnosis
const diagnosisTable = document
  .getElementById("diagnosisTable")
  .getElementsByTagName("tbody")[0];
const addRowBtn = document.getElementById("addRowBtn");

addRowBtn.addEventListener("click", function () {
  const newRow = diagnosisTable.insertRow();

  const dateCell = newRow.insertCell(0);
  const diagnosisCell = newRow.insertCell(1);
  const treatmentCell = newRow.insertCell(2);

  dateCell.innerHTML = '<input type="date" name="date">';
  diagnosisCell.innerHTML = '<input type="text" name="diagnosis">';
  treatmentCell.innerHTML = '<input type="text" name="treatment">';
});

// add diagnisis saving
function saveDiagnosisData() {
  const diagnosisRows = [];
  const rows = diagnosisTable.getElementsByTagName("tr");

  for (let row of rows) {
    const date = row.cells[0].getElementsByTagName("input")[0].value;
    const diagnosis = row.cells[1].getElementsByTagName("input")[0].value;
    const treatment = row.cells[2].getElementsByTagName("input")[0].value;

    if (date || diagnosis || treatment) {
      diagnosisRows.push({ date, diagnosis, treatment });
    }
  }

  localStorage.setItem("diagnosisData", JSON.stringify(diagnosisRows));
}

// loads the diagnosis from local 
function loadDiagnosisData() {
  const diagnosisData = JSON.parse(localStorage.getItem("diagnosisData"));
  if (diagnosisData) {
    diagnosisData.forEach((data) => {
      const newRow = diagnosisTable.insertRow();
      const dateCell = newRow.insertCell(0);
      const diagnosisCell = newRow.insertCell(1);
      const treatmentCell = newRow.insertCell(2);

      dateCell.innerHTML = `<input type="date" name="date" value="${data.date}">`;
      diagnosisCell.innerHTML = `<input type="text" name="diagnosis" value="${data.diagnosis}">`;
      treatmentCell.innerHTML = `<input type="text" name="treatment" value="${data.treatment}">`;
    });
  }
}

// ذخیره‌سازی اطلاعات دیاگنوزیس هنگام ارسال فرم
document.getElementById("medicalForm").addEventListener("submit", function () {
  saveDiagnosisData();
});
