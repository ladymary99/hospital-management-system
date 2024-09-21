// JavaScript for active links and color change
document.querySelectorAll(".dashboard-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".dashboard-item")
      .forEach((link) => link.classList.remove("active-item"));
    this.classList.add("active-item");
  });
});

// Activity Chart
const activityCtx = document.getElementById("activityChart").getContext("2d");
const activityChart = new Chart(activityCtx, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Number of Patients",
        data: [5, 7, 10, 4, 6, 3, 9],
        backgroundColor: "#3ac0da",
        borderColor: "#3ac0da",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Income Chart
const incomeCtx = document.getElementById("incomeChart").getContext("2d");
const incomeChart = new Chart(incomeCtx, {
  type: "line",
  data: {
    labels: [
      "May 10",
      "May 15",
      "May 20",
      "May 25",
      "May 30",
      "June 05",
      "June 10",
      "June 15",
      "June 20",
      "June 25",
      "June 30",
      "July 05",
      "July 10",
    ],
    datasets: [
      {
        label: "Patients",
        data: [10, 20, 30, 25, 35, 50, 40, 60, 70, 80, 90, 100, 110],
        borderColor: "#3dc6c3",
        fill: false,
      },
      {
        label: "Income",
        data: [15, 25, 20, 30, 40, 35, 45, 50, 55, 60, 65, 75, 80],
        borderColor: "#50e3c2",
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

// Pharmacy Orders Chart
const pharmacyOrdersCtx = document
  .getElementById("pharmacyOrdersChart")
  .getContext("2d");
const pharmacyOrdersChart = new Chart(pharmacyOrdersCtx, {
  type: "bar",
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
        label: "Orders",
        data: [30, 74, 40, 68, 82, 55, 63, 35, 20, 79, 10, 88],
        backgroundColor: "#48c8c0",
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
