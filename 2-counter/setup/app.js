// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function init() {
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.target.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }

      count > 0 ? (value.style.color = "green") : (value.style.color = "red");

      count === 0 ? (value.style.color = "#222") : false;

      value.textContent = count;
    });
  });
}

init();
