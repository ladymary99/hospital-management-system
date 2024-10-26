// Chart.js data for Income and Payments charts
const incomeCtx = document.getElementById("incomeChart").getContext("2d");
const paymentsCtx = document.getElementById("paymentsChart").getContext("2d");

const incomeChart = new Chart(incomeCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          2980, 2200, 1980, 2400, 7600, 8400, 5500, 1080, 5280, 3200, 2080,
          1680,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
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

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Payments",
      data: [
        5000, 3000, 4000, 6000, 7000, 8000, 9000, 1000, 5000, 6000, 7000, 8000,
      ],
      fill: false,
      backgroundColor: "#3ac0da",
      borderColor: "#1891c3",
      tension: 0.1,
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          color: "#bce1e9",
          borderDash: [4, 4],
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};
var paymentsChart = new Chart(document.getElementById("paymentsChart"), config);
// copy buttun
function copySectionLink(sectionId) {
  const baseUrl = window.location.origin + window.location.pathname;
  const sectionLink = `${baseUrl}#${sectionId}`;

  navigator.clipboard
    .writeText(sectionLink)
    .then(() => {
      alert("Section link copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Copy failed. Please try again.");
    });
}
