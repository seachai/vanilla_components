let plus = document.getElementsByClassName("fa-plus");
let minus = document.getElementsByClassName("fa-minus");
const accordion = document.getElementsByClassName("accordion-title");
let panel = document.getElementsByClassName("accordion-panel");
const carouselCards = document.getElementsByClassName("carousel-card");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const petBtn = document.getElementById("pet-btn");
const joinBtn = document.getElementById("join-btn");
const modal = document.querySelector(".join-modal");
const joinModalBtn = document.querySelector(".modal-btn");
const loadingModal = document.querySelector(".loading");
const modalExitBtn = document.querySelector(".fa-times");

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

const fetchCat = () => {
  const petImage = document.querySelector(".pet-image");
  let image = "";

  async function requestImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(res => (image = res[0].url))
      .catch(error => console.log(error));
  }

  function changeImage() {
    requestImage();
    petImage.style.backgroundImage = "url(" + image + ")";
    console.log(petImage.style.backgroundImage);
  }

  petBtn.addEventListener("click", changeImage);
};

fetchCat();

const carousel = () => {
  let colorArray = ["red", "blue", "green", "yellow", "purple", "orange"];
  let count = 0;

  function add() {
    if (count <= colorArray.length && count !== colorArray.length - 1) {
      count++;
    } else count = 0;
    changeCard();
    console.log(count);
  }

  function remove() {
    if (count < colorArray.length && count !== 0) {
      count--;
    } else count = colorArray.length - 1;
    changeCard();
    console.log(count);
  }

  function changeCard() {
    return (carouselCards[0].style.backgroundColor = colorArray[count]);
  }

  nextBtn.addEventListener("click", add);
  prevBtn.addEventListener("click", remove);
};

carousel();

// const selectedCards = () => {
//   for (let i = 0; i < carouselCards.length; i++) {
//     carouselCards[i].addEventListener("click", () => {
//       if (carouselCards[i].classList.contains("active")) {
//         carouselCards[i].classList.remove("active");
//       } else carouselCards[i].classList.add("active");
//     });
//   }
// };

// selectedCards();

// const toggleModal = () => {
//   joinBtn.addEventListener("click", () => {
//     modal.classList.toggle("hide-modal");
//   });
//   joinModalBtn.addEventListener("click", () => {
//     modal.classList.toggle("hide-modal");
//     loadingModal.classList.remove("hide-modal");
//   });
//   modalExitBtn.addEventListener("click", () => {
//     modal.classList.toggle("hide-modal");
//   });
// };

// toggleModal();

const colorBar = document.getElementById("color-bar");

window.addEventListener("scroll", e => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
});
