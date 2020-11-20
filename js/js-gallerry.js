import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const imgBigRef = document.querySelector(".lightbox__image");
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
  let index = event.target.dataset.index
  modalRef.classList.add("is-open");
  imgBigRef.src = bigImg;
 imgBigRef.dataset.index =  index
  

  window.addEventListener("keydown", pressEscape);
  window.addEventListener("keydown", changeImg);
}

function changeImg(event) {
   if (event.code ==="ArrowRight"){
    // event.target.firstElementChild.dataset.index= Number(event.target.firstElementChild.dataset.index)+1
    // bigImg.dataset.index=index+1
    imgBigRef.dataset.index=Number(imgBigRef.dataset.index)+1
    // console.log(event.target.firstElementChild.dataset.index)
    imgBigRef.src
  }}

function closeModal() {
  modalRef.classList.remove("is-open");
  imgBigRef.src = "";
  window.removeEventListener("keydown", pressEscape);
}

backdropRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

function pressEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
