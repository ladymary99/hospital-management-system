// JavaScript for active links and color change
document.querySelectorAll(".dashboard-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".dashboard-item")
      .forEach((link) => link.classList.remove("active-item"));
    this.classList.add("active-item");
  });
});
// Gender Chart
const genderCtx = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(genderCtx, {
  type: "pie",
  data: {
    labels: ["Walking", "Sleeping", "Playing", "Swimming", "Gym"],
    datasets: [
      {
        data: [30, 15, 20, 10, 25], // Example data
        backgroundColor: [
          "#3dc6c3",
          "#3ac0da",
          "#50e3c2",
          "#016fc4",
          "#1891c3",
        ],
      },
    ],
  },
});
// Chart setup
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [".", ".", ".", ".", ".", ".", ".", ".", "."],
    datasets: [
      {
        label: "BP Levels",
        data: [20, 30, 25, 40, 50, 60, 70, 60, 80],
        borderColor: "#016fc4",
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
// Income Chart
const incomeCtx = document.getElementById("incomeChart").getContext("2d");
const incomeChart = new Chart(incomeCtx, {
  type: "line",
  data: {
    labels: [".", ".", ".", ".", ".", ".", ".", ".", "."],
    datasets: [
      {
        label: "Sugar Levels",
        data: [10, 20, 30, 25, 35, 50, 40, 60, 70, 80, 90, 100, 110],
        borderColor: "#3dc6c3",
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
