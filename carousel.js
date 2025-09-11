document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const imageCount = document.querySelectorAll("#carousel img").length;
  const carousel = document.getElementById("carousel");
  const leftButton = document.querySelector("#carousel button.left");
  const rightButton = document.querySelector("#carousel button.right");

  function scrollLeft() {
    index -= 1;
    if (index < 0) index = imageCount - 1;
    carousel.scrollLeft = carousel.offsetWidth * index;
  }

  function scrollRight() {
    index += 1;
    if (index > imageCount - 1) index = 0;
    carousel.scrollLeft = carousel.offsetWidth * index;
  }

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") scrollLeft();
    if (e.key === "ArrowRight") scrollRight();
  });

  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);

  let resizeDebounce;
  window.onresize = function () {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(
      () => (carousel.scrollLeft = carousel.offsetWidth * index),
      100
    );
  };
});
