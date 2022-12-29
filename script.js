// Assign to const
const panels = document.querySelectorAll(".panel");

// Loop through panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// Hide Content by removing active class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
