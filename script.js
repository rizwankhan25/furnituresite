document.querySelector(".ri-menu-line").addEventListener("click", function () {
    document.querySelector(".nav-res").style.left = "-40%";
    document.querySelector(".ri-menu-line").style.display = "none";
    document.querySelector(".ri-close-line").style.display = "initial";
  });
  document.querySelector(".ri-close-line").addEventListener("click", function () {
    document.querySelector(".nav-res").style.left = "-100%";
    document.querySelector(".ri-menu-line").style.display = "initial";
    document.querySelector(".ri-close-line").style.display = "none";
  });
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-1",
      start: "100% 100%",
      end: "150% 100%",
      // markers: true,
      scrub: true,
      pin: true,
    },
  });
  tl.to(
    ".part1__top-content",
    {
      rotateX: "100deg",
      opacity: 0,
      duration: 2,
      ease: Power1,
    },
    "same"
  );
  tl.to(
    ".part1__btm_content",
    {
      rotateX: "-100deg",
      opacity: 0,
      duration: 2,
      ease: Power1,
    },
    "same"
  );
  tl.to(
    ".videotag",
    {
      width: "100%",
      height: "100vh",
      duration: 2,
      ease: Power1,
    },
    "same"
  );
  
  document.querySelector(".card").addEventListener("mouseenter", function() {
      document.querySelector(".card").style.backgroundColor = "red"
      document.querySelector(".card").style.duration = "2s"
      document.querySelector(".card").style.transformRotate = "60deg"
  })
  document.querySelector(".card").addEventListener("mouseleave", function() {
      document.querySelector(".card").style.backgroundColor = "forestgreen"
      document.querySelector(".card").style.duration = "2s"
      document.querySelector(".card").style.rotate = "initial"
  })