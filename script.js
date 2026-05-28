const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();


// Radial Research Network interaction: show detail card only after clicking one of the four options
const radialNodes = document.querySelectorAll(".radial-node");
const radialDetails = document.querySelectorAll(".radial-detail");
const radialPanel = document.querySelector(".radial-detail-panel");

radialNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const target = node.dataset.network;

    if (target === "none") {
      return;
    }

    radialNodes.forEach((item) => item.classList.remove("active"));
    node.classList.add("active");

    radialDetails.forEach((detail) => detail.classList.remove("active"));

    const activeDetail = document.getElementById(`radial-${target}`);
    if (activeDetail) {
      activeDetail.classList.add("active");
      if (radialPanel) {
        radialPanel.classList.remove("hidden-panel");
      }
    }
  });
});

