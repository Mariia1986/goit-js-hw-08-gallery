import gallery from "gallery-items.js";
const galArr = gallery.map(({preview,original,description})=>
return  `<li class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${preview}
    alt=${description}
  />
</a>
</li>`);
