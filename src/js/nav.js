export default function () {
  let aboutNav = document.getElementById("aboutNav");
  let projectNav = document.getElementById("projectsNav");
  let skillNav = document.getElementById("skillNav");
  let contactNav = document.getElementById("contactNav");
  let socialNav = document.getElementById("socialNav");

  let displayCheckbox = document.getElementById("navigation-toggle");

  let toggleCheckbox = function () {
    displayCheckbox.checked = !displayCheckbox.checked;
  };

  aboutNav.addEventListener("click", toggleCheckbox);
  projectNav.addEventListener("click", toggleCheckbox);
  skillNav.addEventListener("click", toggleCheckbox);
  contactNav.addEventListener("click", toggleCheckbox);
  socialNav.addEventListener("click", toggleCheckbox);
}
