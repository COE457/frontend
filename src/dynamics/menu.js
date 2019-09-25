document.getElementById("menuButton").addEventListener("click", () => {
  let nav = document.getElementsByTagName("nav")[0];
  if (window.getComputedStyle(nav).display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
