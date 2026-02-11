// Restaurant search filter
document.getElementById("searchRestaurant")
.addEventListener("keyup", function () {

  const query = this.value.toLowerCase();

  document.querySelectorAll("#restaurantList .list-group-item")
  .forEach(item => {

    const name = item.getAttribute("data-name");
    const cuisine = item.getAttribute("data-cuisine");

    if (name.includes(query) || cuisine.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});


// Contact form handling
document.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thank you " + name + "! Your message has been sent.");

  this.reset();
});
