console.log("Index.js is running");

document.querySelector(".content").addEventListener("scroll", function () {
  const homeDiv = document.querySelector("#home");
  const homeBTN = document.querySelector("#homeBTN");
  const homeRect = homeDiv.getBoundingClientRect();

  const triangleDiv = document.querySelector(".triangle");
  const triangleRect = triangleDiv.getBoundingClientRect();

  const projectsDiv = document.querySelector("#projects");
  const projectsBTN = document.querySelector("#projectsBTN");
  const projectsRect = projectsDiv.getBoundingClientRect();


  if (homeRect.top <= 0 && homeRect.bottom >= 0) {
    homeBTN.classList.remove("inactive");
    homeBTN.classList.add("active");
  } else {
    homeBTN.classList.remove("active");
    homeBTN.classList.add("inactive");
  }

  if (triangleRect.top <= 0 && projectsRect.bottom >= 0) {
    projectsBTN.classList.remove("inactive");
    projectsBTN.classList.add("active");
  } else {
    projectsBTN.classList.remove("active");
    projectsBTN.classList.add("inactive");
  }

  console.log("home " + homeBTN.classList);
  console.log("project " + projectsBTN.classList);
});
