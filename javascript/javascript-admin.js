
// Available Beds Chart
// Get the context of the canvas
const ctx = document.getElementById("availableBedsChart").getContext("2d");

// Create a gradient for the bars
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(54, 162, 235, 0.8)");
gradient.addColorStop(1, "rgba(75, 192, 192, 0.2)");

// Bar Chart Configuration
const availableBedsChart = new Chart(ctx, {
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
        label: "Occupied",
        data: [30, 45, 60, 40, 55, 75, 80, 60, 50, 65, 75, 90],
        backgroundColor: "#00589c",
        borderColor: "#00589c",
        borderWidth: 1,
      },
      {
        label: "Reserved",
        data: [15, 25, 35, 25, 40, 50, 60, 45, 35, 55, 65, 80],
        backgroundColor: "#016fc4",
        borderColor: "#016fc4",
        borderWidth: 1,
      },
      {
        label: "Available",
        data: [20, 30, 50, 30, 45, 60, 70, 50, 45, 60, 70, 85],
        backgroundColor: "#1891c3",
        borderColor: "#1891c3",
        borderWidth: 1,
      },
      {
        label: "Cleanup",
        data: [10, 15, 20, 15, 25, 30, 35, 25, 20, 30, 40, 50],
        backgroundColor: "#3ac0da",
        borderColor: "#3ac0da",
        borderWidth: 1,
      },
      {
        label: "Other",
        data: [5, 10, 15, 10, 20, 25, 30, 20, 15, 25, 35, 45],
        backgroundColor: "#3dc6c3",
        borderColor: "#3dc6c3",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});

// Insurance Claims Chart
const insuranceClaimsCtx = document
  .getElementById("insuranceClaimsChart")
  .getContext("2d");
const insuranceClaimsChart = new Chart(insuranceClaimsCtx, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Insurance Claims",
        data: [30, 50, 70, 40, 60, 20, 80],
        backgroundColor: gradient,
        borderColor: "#50e3c2",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// check user login status
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "Login-page.html";
}

// account logout management
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {
  // delete login status
  localStorage.removeItem("loggedIn");

  // redirect to the login page
  window.location.href = "Login-page.html";
});
