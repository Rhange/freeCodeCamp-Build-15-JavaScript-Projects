//! using selectors inside the element
// const questions = document.querySelectorAll(".question");

// const init = () => {
//   questions.forEach((question) => {
//     const btn = question.querySelector(".question-btn");
//     btn.addEventListener("click", () => {
//       // when switch another question, it will remove prev question 'show-text' class name
//       questions.forEach((each) => {
//         question !== each ? each.classList.remove("show-text") : false;
//       });
//       question.classList.toggle("show-text");
//     });
//   });
// };

// init();

//! traversing the dom
const btns = document.querySelectorAll(".question-btn");

const init = () => {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = e.currentTarget.parentElement;
      const question = title.parentElement;
      question.classList.toggle("show-text");
    });
  });
};

init();
