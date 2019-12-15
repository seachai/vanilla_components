let plus = document.getElementsByClassName("fa-plus");
let minus = document.getElementsByClassName("fa-minus");
const accordion = document.getElementsByClassName("accordion-title");
let panel = document.getElementsByClassName("accordion-panel");
const carouselCards = document.getElementsByClassName("carousel-card");

const togglePanel = () => {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
      panel[i].classList.toggle("show-panel");

      let checkMinus = panel[i].classList.contains("show-panel")
        ? ((panel[i] = panel[i].style.maxHeight = panel[i].scrollHeight + "px"),
          (plus[i] = plus[i].style.display = "none"),
          (minus[i] = minus[i].style.display = "block"))
        : (panel[i] = panel[i].style.maxHeight = "0px")(
            (plus[i] = plus[i].style.display = "block"),
            (minus[i] = minus[i].style.display = "none")
          );

      return checkMinus;
    });
  }
};

togglePanel();

const selectedCards = () => {
  for (let i = 0; i < carouselCards.length; i++) {
    carouselCards[i].addEventListener("click", () => {
      console.log("hello");
      if (!carouselCards[i].style.border) {
        carouselCards[i].style.border = "3px solid green";
      } else {
        carouselCards[i].style.border = "";
      }
    });
  }
};

selectedCards();
