// Slideshow script to run slideshow and control with button to start and stop

let currentSlideshowIndex = 1;
let thisSlideshowImage = document.querySelector("#slideshow-image");
let isRunning = true;
let SLIDE_SHOW_SPEED = 1000;

const imagesArray = [
  {
    alt: "A Stable Diffusion Sci-Fi scene depicting some kind of spaceship and a green and yellow field of grass.",
    src: "images/stable_diffusion_replicate6.jpg"
  },
  {
    alt: "A stable Diffusion Sci-Fi scene depicting a person standing near water with a type of large robot on the right side.",
    src: "images/stable_diffusion_replicate1.jpg"
  },
  {
    alt: "A Stable Diffusion Sci-Fi scene depicting a spaceship lying in water with some large rectangular pipes going up into the air.",
    src: "images/stable_diffusion_replicate9.jpg"
  },
  {
    alt: "A Stable Diffusion Sci-Fi scene depending some artifact shards being suspended in the air on top of water.",
    src: "images/stable_diffusion_replicate2.jpg"
  },
  {
    alt: "A Stable Diffusion Sci-Fi scene with some rail track type objects surrounded by greenery and a futuristic building in the center.",
    src: "images/stable_diffusion_replicate3.jpg"
  }
];

function slideShowSequencer() {

  setTimeout(function(){
    if (isRunning) {
      console.log("Setting image in slideshow at index: " + currentSlideshowIndex);
      setSlideShowImage(currentSlideshowIndex);
      currentSlideshowIndex++;
      if (currentSlideshowIndex == imagesArray.length) { currentSlideshowIndex = 0; }
    }
    slideShowSequencer();
  },SLIDE_SHOW_SPEED);
};

function setSlideShowImage(incomingArrayIndex) {
  thisSlideshowImage.src = imagesArray[incomingArrayIndex].src;
  thisSlideshowImage.alt = imagesArray[incomingArrayIndex].alt;
};

function slideShowControl() {
  let slideShowControlButton = document.querySelector("#slideshow-control");
  if (isRunning) {
    slideShowControlButton.textContent = "Start slideshow";
    isRunning = false;
  } else {
    slideShowControlButton.textContent = "Stop slideshow";
    isRunning = true;
  }
  console.log("Setting slideshow running to: " + isRunning);
};

slideShowSequencer();