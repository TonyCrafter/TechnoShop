import "./index.html";
import "./card.html";
import "./cart.html";
import "./index.scss";

import Swiper, { Thumbs, Scrollbar, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { startPagination } from "./modules/pagination";

try {
  const paginationWrapper = document.querySelector(".pagination");
  const pageURL = new URL(location);
  const page = +pageURL.searchParams.get("page") || 1;

  startPagination(paginationWrapper, 50, page);

} catch (e) {
  console.warn(e)
  console.warn('Эта не главная страница')
}

const thumbSwiper = new Swiper(".card__slider-thumb", {
  spaceBetween: 39,
  slidesPerView: 3,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  modules: [Scrollbar],
});

new Swiper(".card__image", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: thumbSwiper,
    slideThumbActiveClass: "card__thumb-btn_active",
  },
  modules: [Thumbs],
});

new Swiper(".recommended__slider", {
  spaceBetween: 30,
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Pagination],
});
