// JavaScript for active links and color change
document.querySelectorAll(".dashboard-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".dashboard-item")
      .forEach((link) => link.classList.remove("active-item"));
    this.classList.add("active-item");
  });
});
// Search function
