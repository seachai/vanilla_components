const plus = document.querySelectorAll(".fa-plus");
const minus = document.querySelectorAll(".fa-minus");
const accordion = document.querySelectorAll(".accordion-title");
const panel = document.querySelectorAll(".accordion-panel");

const carouselCards = document.querySelectorAll(".carousel-card");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const petBtn = document.getElementById("pet-btn");

const joinBtn = document.getElementById("join-btn");
const modal = document.querySelector(".join-modal");
const joinModalBtn = document.querySelector(".modal-btn");
const loadingModal = document.querySelector(".loading");
const modalExitBtn = document.querySelector(".fa-times");

const toggleAccordion = () => {
  const togglePanel = currentIndex => {
    // toggle the current panel
    let showPanel = panel[currentIndex].classList.toggle("show-panel");
    let currentPanel = panel[currentIndex];
    let currentPlusIcon = plus[currentIndex];
    let currentMinusIcon = minus[currentIndex];

    // if true, set acoordian height
    if (showPanel) {
      currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
      currentPlusIcon = currentPlusIcon.style.display = "none";
      currentMinusIcon = currentMinusIcon.style.display = "block";
    }

    // if false, remove the height
    if (!showPanel) {
      currentPanel = currentPanel.style.maxHeight = "0px";
      currentPlusIcon = currentPlusIcon.style.display = "block";
      currentMinusIcon = currentMinusIcon.style.display = "none";
    }
  };

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => togglePanel(i));
  }
};

toggleAccordion();

const fetchCat = () => {
  const petImage = document.querySelector(".pet-image");
  let image = "";

  async function requestImage() {
    image = await fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(res => res[0].url)
      .catch(error => console.log(error));
  }

  async function changeImage() {
    await requestImage();
    petImage.style.backgroundImage = `url(${image})`;
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

const selectedCards = () => {
  carouselCards.forEach(image => {
    image.addEventListener("click", () => {
      carouselCards.forEach(image => image.classList.remove("active"));
      image.classList.add("active");
    });
  });
};

selectedCards();

const toggleModal = () => {
  joinBtn.addEventListener("click", () => {
    modal.classList.toggle("hide-modal");
  });
  joinModalBtn.addEventListener("click", () => {
    modal.classList.toggle("hide-modal");
    loadingModal.classList.remove("hide-modal");
  });
  modalExitBtn.addEventListener("click", () => {
    modal.classList.toggle("hide-modal");
  });
};

toggleModal();

const colorBar = document.getElementById("color-bar");

window.addEventListener("scroll", e => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
});
