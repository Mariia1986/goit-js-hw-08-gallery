import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const imgBigRef = document.querySelector(".lightbox__image");
const btnCloseRef = document.querySelector('[data-action="close-lightbox"]');
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
}
btnCloseRef.addEventListener("click", closeModal);
function closeModal(event) {
  modalRef.classList.remove("is-open");
  console.log(event.target);
}
