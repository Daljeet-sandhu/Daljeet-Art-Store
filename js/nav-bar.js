function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var y = document.getElementByClass("bar-icon");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
  var z = document.getElementByClass("cross-icon2");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}
