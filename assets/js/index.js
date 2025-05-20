$(document).ready(function () {
  new WOW().init();
});

// ----header-dropdown-menu---
$(document).ready(function () {
  $(".moblie-menu-btn").click(function () {
    $(".header_main ul").toggleClass("active");
    $(".line").toggleClass("active");
    $(".mobile-menu-overlay").toggleClass("active");
  });
  $(".mobile-menu-overlay").click(function () {
    $(".header_main ul").removeClass("active");
    $(".line").removeClass("active");
    $(".mobile-menu-overlay").removeClass("active");
  });
});

// ---banner-slider---
var swiper = new Swiper(".banner_slider .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  //   // Register the SplitText plugin
  //   gsap.registerPlugin(SplitText);
  // ---modal-top-fans-slider---
  var swiper = new Swiper(".modal_top_fans_slider .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6.5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 7.5,
        spaceBetween: 20,
      },
    },
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Register the SplitText plugin
  //   gsap.registerPlugin(SplitText);

  //   // Targeting the element correctly
  //   const splitHomeTitle = new SplitText(".banner_content h1", { type: "lines" });
  //   const splitHomeText = new SplitText(".banner_content h4", { type: "lines" });

  //   gsap.from(splitHomeTitle.lines, {
  //     y: 20,
  //     opacity: 0,
  //     duration: 0.4,
  //     stagger: 0.2,
  //     // ease: "power2.out",
  //   });
  //   gsap.from(splitHomeText.lines, {
  //     y: 20,
  //     opacity: 0,
  //     duration: 0.4,
  //     stagger: 0.2,
  //     // ease: "power2.out",
  //   });

  //   gsap.from(".banner_content_tag", {
  //     scale: 0.5,
  //     opacity: 0,
  //     duration: 0.4,
  //   });
  //   gsap.from(".banner-btn-wrp .cmn_btn", {
  //     x: -40,
  //     opacity: 0,
  //     duration: 0.5,
  //   });

  // From Wizard Start =============================================

  // const tabButtons = document.querySelectorAll(".nav-link");
  // const tabContents = document.querySelectorAll(".steps");
  // const nextBtn = document.querySelector(
  //   ".fromSubmit-btn-section .cmn_btn:not(.cancel_btn)"
  // );
  // const prevBtn = document.querySelector(".fromSubmit-btn-section .cancel_btn");

  // let currentIndex = 0;

  // function showTab(index) {
  //   tabButtons.forEach((btn, i) => {
  //     btn.classList.toggle("active", i === index);
  //     btn.setAttribute("aria-selected", i === index ? "true" : "false");
  //     tabContents[i]?.classList.toggle("show", i === index);
  //     tabContents[i]?.classList.toggle("active", i === index);
  //   });

  //   // Disable prev button on first tab, change next button text on last tab
  //   prevBtn.disabled = index === 0;
  //   nextBtn.textContent =
  //     index === tabButtons.length - 1 ? "Submit" : "Save & Next";
  // }

  // // Event listeners
  // nextBtn.addEventListener("click", () => {
  //   if (currentIndex < tabButtons.length - 1) {
  //     currentIndex++;
  //     showTab(currentIndex);
  //   } else {
  //     document.querySelector("form")?.submit(); // Final submit
  //   }
  // });

  // prevBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //     showTab(currentIndex);
  //   }
  // });

  // tabButtons.forEach((btn, index) => {
  //   btn.addEventListener("click", () => {
  //     currentIndex = index;
  //     showTab(index);
  //   });
  // });

  // // Initialize first tab
  // showTab(currentIndex);

  // From Wizard End =============================================

  // Upload Image In Login Start =============================================

  const uploadImageLogin = document.querySelectorAll(
    ".login-from-userImg-section"
  );

  uploadImageLogin.forEach((item) => {
    const fileInput = item.querySelector("input[type='file']");
    const previewImg = item.querySelector(".preview-img");
    const removeBtn = item.querySelector(".remove-img");
    const uploadIcon = item.querySelector(".upload-icon");

    // Ensure all elements are found before proceeding
    if (!fileInput || !previewImg || !removeBtn || !uploadIcon) return;

    // When a file is selected
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          previewImg.src = reader.result;
          previewImg.classList.remove("d-none"); // Show the preview image
          removeBtn.classList.remove("d-none"); // Show the remove button
          uploadIcon.classList.add("d-none"); // Hide the upload icon
        };
        reader.readAsDataURL(file);
      }
    });

    // When the remove button is clicked
    removeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      fileInput.value = ""; // Reset file input
      previewImg.src = ""; // Clear preview image
      previewImg.classList.add("d-none"); // Hide the preview image
      removeBtn.classList.add("d-none"); // Hide the remove button
      uploadIcon.classList.remove("d-none"); // Show the upload icon again
    });
  });

  // Upload Image In Login End =============================================

  // User Login Profile Img Upload Section Start

  const userProfileImgSection = document.querySelectorAll(
    ".profileImg-upaload-section"
  );

  userProfileImgSection?.forEach((section) => {
    const fileInput = section.querySelector('input[type="file"]'); // ⬅️ FIXED
    const imagePreview = section.querySelector("img");
    const icon = section.querySelector(".userProfileIcon");

    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function () {
          imagePreview.src = reader.result;
          imagePreview.classList.remove("d-none");
          if (icon) icon.style.display = "none";
        };

        reader.readAsDataURL(file);
      }
    });
  });

  // User Login Profile Img Upload Section End
});

// ===live-video-hide-show===
const clickcard = document.querySelectorAll(".streaming_fans_card");
const videoDiv = document.querySelector(".live_video_wrp");
const parentdiv = document.querySelector(".streaming_fans_card_Wrp");
const backbtn = document.querySelector(".live_video_back_btn");
const endvideo = document.querySelector(".live_video_end_btn");

clickcard?.forEach((curcard) => {
  curcard.addEventListener("click", () => {
    videoDiv.classList.add("active");
    parentdiv.classList.add("active");
  });
});

backbtn?.addEventListener("click", () => {
  videoDiv.classList.remove("active");
  parentdiv.classList.remove("active");
});

// endvideo.addEventListener("click", () => {
//   videoDiv.classList.remove("active");
//   parentdiv.classList.remove("active");
// });

// SearchBar Show Hide =====================
const searchBarSeaction = document.querySelector(".searchBar-section");
const ShowSearchBarBtn = document.querySelector(".searchShowBtn");

ShowSearchBarBtn?.addEventListener("click", () => {
  searchBarSeaction.classList.toggle("active");
});

// Modal Form Wizard Section Strat =================================
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".steps");

  document.querySelectorAll(".next").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextStep = btn.getAttribute("data-next");
      if (nextStep) {
        steps.forEach((step) => step.classList.add("d-none"));
        document.getElementById(`step${nextStep}`).classList.remove("d-none");
      }
    });
  });

  document.querySelectorAll(".cancel_btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prevStep = btn.getAttribute("data-prev");
      if (prevStep) {
        steps.forEach((step) => step.classList.add("d-none"));
        document.getElementById(`step${prevStep}`).classList.remove("d-none");
      }
    });
  });
});

// Modal Form Wizard Section ENd =================================

// Video Call Button Section Start

const videoCallButton = document.querySelector(
  ".video-call-control-btn-section"
);
const videoCallMainSectionVideo = document.querySelector(
  ".main-vidos-call-section video"
);
const videoCallOverlay = document.querySelector(".video-call-overlay");
const userProfileSection = document.querySelector(".userProfileVideo");

videoCallMainSectionVideo?.addEventListener("click", () => {
  videoCallButton.classList.toggle("active");
  userProfileSection.classList.toggle("active");
});
videoCallOverlay?.addEventListener("click", () => {
  videoCallButton.classList.toggle("active");
  userProfileSection.classList.toggle("active");
});

// Video Call Button Section End

// Follow Button Section Start ============================

const followBtn = document.querySelectorAll(".followBtn");

followBtn?.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// Follow Button Section End ============================
// Follow Button Section Start ============================

document.addEventListener("click", function (e) {
  const passwordIcon = e.target.closest(".password-icon");
  if (!passwordIcon) return; // Clicked outside, exit

  const inputSection = passwordIcon.closest(".input-section");
  const inputField = inputSection.querySelector("input");
  const openEye = inputSection.querySelector(".open-eye");
  const closeEye = inputSection.querySelector(".close-eye");

  const isPassword = inputField.type === "password";
  inputField.type = isPassword ? "text" : "password";

  if (isPassword) {
    openEye.classList.add("active");
    closeEye.classList.add("active");
  } else {
    openEye.classList.remove("active");
    closeEye.classList.remove("active");
  }
});

// Follow Button Section End ============================

// Message Report Modal Button section Start =====================

const buttons = document.querySelectorAll(".tabs-button-section .tabs-button");

buttons?.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Message Report Modal Button section End =====================
