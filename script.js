const labels = document.querySelectorAll(".option_number label");
const slider = document.querySelector(".slider");

labels.forEach((label) => {
  label.addEventListener("click", (e) => {
    const target = e.target.htmlFor;

    switch (target) {
      case "toggle1":
        document.getElementById("toggle1").checked = true;
        slider.style.transform = "translateX(0px)";
        slider.style.transform = "translateY(1px)";
        break;
      case "toggle2":
        document.getElementById("toggle2").checked = true;
        slider.style.transform = "translateX(18px)";
        slider.style.transform = "translateY(1px)";
        break;
      case "toggle3":
        document.getElementById("toggle3").checked = true;
        slider.style.transform = "translateX(36px)";
        slider.style.transform = "translateY(1px)";
        break;
    }
  });
});
