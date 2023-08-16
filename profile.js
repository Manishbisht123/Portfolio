const navId = document.getElementById("nav_menu"),
    ToggleBtnId = document.getElementById("toggle_btn"),
    CloseBtnId = document.getElementById("close_btn");

// show menu

ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// hide menu

CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});



// typed js 

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Ui/Ux Developer', 'Web Designer'],
    typeSpeed: 80,
    loop: true
  });