


var imageIndex = 0;
function changeImage() {    
    var myImage = document.getElementById("homepage-img");      
    var imageSources = ["https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp", "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp", "https://preview.colorlib.com/theme/cozastore/images/slide-04.jpg.webp", "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"];
    myImage.style.opacity = 0; // Set opacity to 0 before changing the image
    setTimeout(function () {
        myImage.src = imageSources[imageIndex];
        imageIndex = (imageIndex + 1) % imageSources.length;
        myImage.style.opacity = 1; // Set opacity back to 1 after changing the image
    }, 500); // Wait for the transition duration before changing the image
}

setInterval(changeImage, 2000);

document.addEventListener("DOMContentLoaded", function() {
  var shopNowButton = document.getElementById("shop-now");
  shopNowButton.classList.add("pop-up");
});



function favourite(heartIcon) {
heartIcon.classList.toggle('fa-regular');
heartIcon.classList.toggle('fa-solid');
}



//for the main items to appear to be coming up using Observer API
document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll('.card');
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(function(card) {
    observer.observe(card);
  });
});


//for the cart items , transition added to appear from the left side
  document.addEventListener("DOMContentLoaded", function() {
    var cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add('show');
      }, index * 100); // Adjust the delay based on your preference
    });
  });




document.addEventListener("DOMContentLoaded", function () {
  showLoadingOverlay();
});
function showLoadingOverlay() {
  const loadingOverlay = document.getElementById("loadingOverlay");
  // Show loading overlay when the page starts loading
  loadingOverlay.style.display = "flex";
  // Hide loading overlay when the page finishes loading
     setTimeout(function () {
        loadingOverlay.style.display = "none";
    }, 200);
}



function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (username.length < 6) {
    alert('Username should be greater than 6 characters');
    return false;
  }

  else if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return false;
  }

  else if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }
  return true;
}
