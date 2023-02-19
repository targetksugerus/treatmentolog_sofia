// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // get elements
  const videoContainer = document.querySelector(".video-container");
  const video = document.querySelector(".video-background");
  const header = document.querySelector(".heamder");
  const mainContainer = document.querySelector(".btn-tree");
  const logoContainer = document.querySelector(".logo");
  const bgImage = document.querySelector(".bg-img");
  const footer = document.querySelector(".footer");

  // delay class
  const DELAY_CLASS = "animate__delay-2s";

  // check if the video has been played before
  if (!localStorage.getItem("videoPlayed")) {
    //add delay class
    header.classList.add(DELAY_CLASS);
    mainContainer.classList.add(DELAY_CLASS);
    logoContainer.classList.add(DELAY_CLASS);
    bgImage.classList.add(DELAY_CLASS);
    footer.classList.add(DELAY_CLASS);

    // set initial values
    let opacity = 1;
    let scale = 1;

    // set a timer to reduce opacity and scale every 100ms
    const intervalID = setInterval(function() {
      opacity -= 0.05;
      scale += 1.5;
      // set the new opacity and scale
      video.style.transition = "opacity 2s cubic-bezier(0.4, 0, 1, 1), transform 2s cubic-bezier(0.4, 0, 1, 1)"
      video.style.opacity = opacity;
      video.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
      // stop the timer when opacity reaches 0
      if (opacity <= 0) {
        clearInterval(intervalID);
        // pause the video
        video.pause();
        // set a flag to indicate that the video has been played
        localStorage.setItem("videoPlayed", true);
      }
    }, 100);
  } else {
    //remove delay class to elements
    header.classList.remove(DELAY_CLASS);
    mainContainer.classList.remove(DELAY_CLASS);
    logoContainer.classList.remove(DELAY_CLASS);
    bgImage.classList.remove(DELAY_CLASS);
    footer.classList.remove(DELAY_CLASS);

    //stop video
    videoContainer.remove();
  }
});
