const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const init = () => {
  // toggle menu button
  toggleBtn.addEventListener("click", () => {
    /*
    sidebar.classList.contains("show-sidebar")
      ? sidebar.classList.remove("show-sidebar")
      : sidebar.classList.add("show-sidebar");
    */

    sidebar.classList.toggle("show-sidebar");
  });

  // close button
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
};

init();
