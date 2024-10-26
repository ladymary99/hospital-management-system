function showContent(tabNumber) {
  // hiding elements
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`content-${i}`).style.display = "none";
  }

  // showing elements with clicking
  document.getElementById(`content-${tabNumber}`).style.display = "block";
}
const changePhotoBtn = document.getElementById("change-photo-btn");
const photoInput = document.getElementById("photo-input");
const profilePicture = document.getElementById("profile-picture");
const sidebarPicture = document.getElementById("sidebar-picture");

changePhotoBtn.addEventListener("click", function () {
  photoInput.click();
});

photoInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newImageSrc = e.target.result;

      updateAllPictures(newImageSrc);
    };
    reader.readAsDataURL(file);
  }
});
function updateAllPictures(imageSrc) {
  profilePicture.src = imageSrc;
  sidebarPicture.src = imageSrc;
  
}
