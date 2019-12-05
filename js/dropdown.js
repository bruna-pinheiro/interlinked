var dropdown = document.getElementById('dropdown-content');
var dropdownBtn = document.getElementById("dropbtn");
dropdownBtn.onclick = function() {
  if(dropdown.style.display == "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
window.onclick = function(event) {
  console.log("heys")
  if (event.target == dropdown) {
    dropdown.style.display = "none";
  } else if (event.target != dropdownBtn) {
    dropdown.style.display = "none";
  }
}
