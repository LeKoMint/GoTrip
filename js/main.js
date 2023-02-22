// CARUSEL

const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true, //виділяє центральне зображення (завдяки цьому ми накладаємо інший стиль збільшеного зображення)
  loop: true, //робимо це для того, щоб можна було циклити
  margin: 30, //відстань між зображеннями
  startPosition: 1, //вказує на індекс (вони починаються з 0, то ж зображення активне буде друге)
  items: 3, //вказує скільки зображень виводити за раз

  responsive: {
    0: {
      margin: 15,
    },

    1000: {
      margin: 20,
    },

    1270: {
      margin: 30,
    },
  },
});

// Go to the previous item
$(".slider_btn--prew").click(function () {
  owl.trigger("prev.owl.carousel");
});

// Go to the next item
$(".slider_btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// BUTTON ADAPTIVE

const navBtn = document.querySelector(".nav_toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

navBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon--active"); // зміна бургер-меню на хрестик при натисканні (і навпаки)
  nav.classList.toggle("nav--mobile"); // відкривання мобільного меню
  document.body.classList.toggle("no-scroll"); //скривання вертикального скролу
};
