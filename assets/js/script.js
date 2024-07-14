// Toggle FAQs
const heroFAQs = document.querySelectorAll(
  ".hero-section .hero-faqs > ul > li"
);
heroFAQs.forEach((faq, index) => {
  const ques = faq.querySelector("div.ques");
  ques.addEventListener("click", () => {
    heroFAQs.forEach((_faq, _index) => {
      if (index === _index) {
        _faq.classList.toggle("active");
      } else {
        _faq.classList.remove("active");
      }
    });
  });
});

// Filtering NFTs by Timelines
const allFilterBtns = document.querySelectorAll(
  ".work_type_filter_btn[data-filter]"
);
$(document).ready(function () {
  $(".work_type_filter_btn").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all_projects") {
      $(".work_sample_filter_card").show("1000");
    } else {
      $(".work_sample_filter_card")
        .not("." + value)
        .hide("3000");
      $(".work_sample_filter_card")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".work_type_filter_btn").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
  allFilterBtns[0].click();
});

allFilterBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    allFilterBtns.forEach((btn, i) => {
      btn.classList.remove("btn-light");
      btn.classList.add("btn-dark");
    });
    btn.classList.add("btn-light");
  });
});
