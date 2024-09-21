// information of depatments
const departments = {
  dep1: {
    title: "Neurology",
    description:
      "Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord.",
    images: ["pictures/n1.jpg", "pictures/n2.jpg"],
  },
  dep2: {
    title: "Ophthalmology",
    description:
      "Ophthalmology is a clinical and surgical specialty within medicine that deals with the diagnosis and treatment of eye disorders. A former term is oculism. Ophthalmology.",
    images: ["pictures/o1.jpg", "pictures/o2.jpg"],
  },
  dep3: {
    title: "Nuclear Magnetic",
    description:
      "NUCLEAR MAGNETIC RESONANCE RESEARCH (NMR). The NMR Facility at Mayo currently supports three main fields of NMR biomedical application: Study of the structure ...",
    images: ["pictures/no1.jpg", "pictures/no2.jpg"],
  },
  dep4: {
    title: "X-Ray",
    description:
      "X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body. The images show the parts of your body in different shades of black and white. This is because different tissues absorb different amounts of radiation.",
    images: ["pictures/xray1.jpg", "pictures/xray2.jpg"],
  },
  dep5: {
    title: "Surgical",
    description:
      "Surgery is a medical specialty that uses manual and instrumental techniques to diagnose or treat pathological conditions, to alter bodily functions, to reconstruct or improve aesthetics and appearance, or to remove unwanted tissues or foreign bodies",
    images: ["pictures/s1.jpg", "pictures/s2.jpg"],
  },
  dep6: {
    title: "Cardiology",
    description:
      "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.",
    images: ["pictures/c1.jpg", "pictures/c2.jpg"],
  },
};

// show information of departement
function showDepartment(dep) {
  const departmentTitle = document.getElementById("department-title");
  const departmentDescription = document.getElementById(
    "department-description"
  );
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const departmentImages = document.querySelector(".department-images");

  // update of information
  departmentTitle.textContent = departments[dep].title;
  departmentDescription.textContent = departments[dep].description;

  // update of images
  image1.src = departments[dep].images[0];
  image2.src = departments[dep].images[1];

  // showing images
  departmentImages.style.display = "block";
}
