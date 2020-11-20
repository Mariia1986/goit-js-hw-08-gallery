import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const imgBigRef = document.querySelector(".lightbox__image");
const btnCloseRef = document.querySelector('[data-action="close-lightbox"]');
const backdropRef = document.querySelector(".lightbox__overlay");
const galArr = gallery.map(({ preview, original, description }) => {
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
  />
</a>
</li>`;
});

galleryRef.insertAdjacentHTML("afterbegin", galArr.join(""));
galleryRef.addEventListener("click", onClickGall);

function onClickGall(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigImg = event.target.dataset.source;
  modalRef.classList.add("is-open");
  imgBigRef.src = bigImg;
  console.log(event.target);
  window.addEventListener("keydown", pressEscape) 
      
};
btnCloseRef.addEventListener("click", closeModal);

function closeModal() {
  modalRef.classList.remove("is-open");
  imgBigRef.src = "";
  window.removeEventListener("keydown", pressEscape)

}

backdropRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
  
});

function pressEscape(event){
      if (event.code === "Escape") {
      closeModal();
    }
    
}
