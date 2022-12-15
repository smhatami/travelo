
// sticky navbar
function fixedNav() {
    let navbar = document.getElementById("navBar");
    navbar.classList.add("fixed-nav");
    let colNav = document.getElementById("myNav")
    colNav.classList.add("fixed-col-nav")
  }
  function unFixedNav() {
    let navbar = document.getElementById("navBar");
    navbar.classList.remove("fixed-nav");
    let colNav = document.getElementById("myNav")
    colNav.classList.remove("fixed-col-nav")
  }
  
  document.onscroll = function (e) {
    if (document.documentElement.scrollTop >= 600) {
      fixedNav();
    } else {
      unFixedNav();
    }
  };
  