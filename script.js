// Image Slider with 3D Animation Fix
let index = 0;
let images = document.querySelectorAll('.slides img');
images[0].classList.add("active"); // Ensure first image is visible

function changeSlide() {
    let prevIndex = index;
    index = (index + 1) % images.length;

    images[prevIndex].classList.remove("active");
    images[prevIndex].classList.add("flip");

    images[index].classList.add("zoom");
    images[index].classList.add("active");

    setTimeout(() => {
        images[prevIndex].classList.remove("flip");
        images[index].classList.remove("zoom");
    }, 1000);
}

setInterval(changeSlide, 3000);

// Updated Financial Data
let totalCollection = 9862;
let totalExpenses = 800;
let balance = totalCollection - totalExpenses;

// Fast Animation (2-3 seconds)
function animateNumbers(id, end) {
  let obj = document.getElementById(id);
  let count = 0;
  let step = Math.ceil(end / 50); // Faster count
  let timer = setInterval(() => {
    count += step;
    if (count >= end) {
      count = end;
      clearInterval(timer);
    }
    obj.innerText = "₹" + count;
  }, 30);
}

// Start Animation on Load
window.onload = function() {
  animateNumbers("collection", totalCollection);
  animateNumbers("expenses", totalExpenses);
  animateNumbers("balance", balance);
};
