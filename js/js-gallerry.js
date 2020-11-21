import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const imgBigRef = document.querySelector('[data-index =""]');
const btnCloseRef = document.querySelector('[data-action="close-lightbox"]');
const backdropRef = document.querySelector(".lightbox__overlay");

const galArr = gallery.map(({ preview, original, description, i }) => {
  return `<li class="gallery__item">
<a
  class="gallery__link"
  href='${original}'
>
  <img
    class="gallery__image"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
    data-index='${i}'
  />
</a>
</li>`;
});

galleryRef.insertAdjacentHTML("afterbegin", galArr.join(""));
galleryRef.addEventListener("click", onClickGall);
btnCloseRef.addEventListener("click", closeModal);

function onClickGall(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigImg = event.target.dataset.source;
  let index = event.target.dataset.index;
  modalRef.classList.add("is-open");
  imgBigRef.src = bigImg;
  imgBigRef.dataset.index = index;

  window.addEventListener("keydown", pressKey);
}

function closeModal() {
  modalRef.classList.remove("is-open");
  imgBigRef.src = "";
  window.removeEventListener("keydown", pressKey);
}

backdropRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

function pressKey(event) {
  if (event.code === "Escape") {
    closeModal();
  }
  if (event.code === "ArrowRight") {
    getBigIMG(imgBigRef.dataset.index, +1);
  }
  if (event.code === "ArrowLeft") {
    getBigIMG(imgBigRef.dataset.index, -1);
  }
}
function getBigIMG(Ind, add) {
  let activeIndex = Number(Ind) + add;
  if (activeIndex === -1) {
    activeIndex = gallery.length - 1;
  }
  if (activeIndex === gallery.length) {
    activeIndex = 0;
  }

  imgBigRef.src = gallery[activeIndex].original;
  imgBigRef.dataset.index = gallery[activeIndex].i;
}
