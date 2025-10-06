$("document").ready(function () {
  $("#ham").on("click", function () {
    $("#navul").toggleClass("resli");
  });

  $("#email").on("focusout", function () {
    email = $("#email");

    if (isEmail(email)) {
      email.removeClass("invalid");
    } else if (!isEmail(email) && email.val() != "") {
      email.addClass("invalid");
    } else {
      email.removeClass("invalid");
    }
  });

  function slideText(div1, div2, div3) {
    setTimeout(function () {
      $(div1).css({
        display: "block",
        transform: "translateX(0rem)",
        transition: "2.5s",
      });
      $(div2).css({
        display: "none",
        transform: "translateX(-100rem)",
        transition: "2.5s",
      });

      $(div3).css({
        display: "block",
        transform: "translateX(100rem)",
        transition: "2.5s",
      });
    }, 1000);
  }

  function continuousSlide() {
    setTimeout(function () {
      $("#div2").css({
        display: "block",
      });
      slideText("#div2", "#div3", "#div1");
    }, 4000);
    setTimeout(function () {
      $("#div3").css({
        display: "block",
      });
      slideText("#div3", "#div1", "#div2");
    }, 8000);
    setTimeout(function () {
      $("#div1").css({
        display: "block",
      });
      slideText("#div1", "#div2", "#div3");
    }, 12000);
  }
  continuousSlide();
  setInterval(continuousSlide, 15000);

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Ensure the category tab is hidden initially
  $("#categories").addClass("hidden"); // Add a hidden class initially
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 230 ||
    document.documentElement.scrollTop > 230
  ) {
    const categories = document.getElementById("categories");
    if (categories.classList.contains("hidden")) {
      categories.classList.remove("hidden");
      categories.classList.add("slideUp");
    }
  }
}
