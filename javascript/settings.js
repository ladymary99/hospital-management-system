// JavaScript for active links and color change
document.querySelectorAll(".dashboard-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".dashboard-item")
      .forEach((link) => link.classList.remove("active-item"));
    this.classList.add("active-item");
  });
});
function showContent(tabNumber) {
  // hiding elements
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`content-${i}`).style.display = "none";
  }

  // showing elements with clicking
  document.getElementById(`content-${tabNumber}`).style.display = "block";
}
