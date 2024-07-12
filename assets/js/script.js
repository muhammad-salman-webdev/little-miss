const heroFAQs = document.querySelectorAll(
  ".hero-section .hero-faqs > ul > li"
);
heroFAQs.forEach((faq, index) => {
  const ques = faq.querySelector("div.ques");
  ques.addEventListener("click", () => {
    console.log("hihihi");
    heroFAQs.forEach((_faq, _index) => {
      if (index === _index) {
        _faq.classList.toggle("active");
      } else {
        _faq.classList.remove("active");
      }
    });
  });
});
