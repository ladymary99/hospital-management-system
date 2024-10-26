
// Gender Chart
const genderCtx = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(genderCtx, {
  type: "pie",
  data: {
    labels: ["Female", "Male", "Kids"],
    datasets: [
      {
        data: [50, 30, 20], // Example data
        backgroundColor: ["#3dc6c3", "#3ac0da", "#50e3c2"],
      },
    ],
  },
});

// Patients Chart
const patientsCtx = document.getElementById("patientsChart").getContext("2d");
const patientsChart = new Chart(patientsCtx, {
  type: "bar",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Patients",
        data: [15, 20, 18, 16], // Example data
        backgroundColor: ["#3ac0da"],
      },
    ],
  },
});
// Chart setup
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "May 10",
      "May 15",
      "May 20",
      "May 25",
      "June 1",
      "June 5",
      "June 10",
      "June 15",
      "June 20",
    ],
    datasets: [
      {
        label: "Surgery",
        data: [20, 30, 25, 40, 50, 60, 70, 60, 80],
        borderColor: "#016fc4",
        fill: false,
      },
      {
        label: "ICU",
        data: [30, 40, 35, 50, 60, 70, 90, 85, 100],
        borderColor: "#3ac0da",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
 function downloadFile() {
  const linkInput = document.getElementById("linkInput").value.trim();
  const format = document.querySelector('input[name="format"]:checked');

  if (!linkInput) {
    alert("Please paste the link.");
    return;
  }

  if (!format) {
    alert("Please select a format.");
    return;
  }

  const fileType = format.value;
  const downloadLink = `${linkInput}.${fileType}`;

  
  const a = document.createElement("a");
  a.href = downloadLink;
  a.download = `data.${fileType}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
