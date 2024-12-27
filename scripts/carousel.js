// SLIDER

const slides = document.querySelectorAll(".offer__slide"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesInner = document.querySelector(".offer__slider-inner");

let slideIndex = 1,
    offset = 0;

const width = slidesWrapper.clientWidth;

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
} else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
}

slidesInner.style.width = 100 * slides.length + "%";
slidesInner.style.display = "flex";
slidesInner.style.transition = "transform 0.5s ease";

slidesWrapper.style.overflow = "hidden";

slides.forEach(slide => {
    slide.style.width = `${width}px`;
});

next.addEventListener("click", () => {
    if (offset === width * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += width;
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
});

prev.addEventListener("click", () => {
    if (offset === 0) {
        offset = width * (slides.length - 1);
    } else {
        offset -= width;
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
});
