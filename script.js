// Search: opens an Amazon.com search for the typed text
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var q = document.getElementById("search-input").value.trim();
    if (q) {
        window.open("https://www.amazon.com/s?k=" + encodeURIComponent(q), "_blank", "noopener");
    }
});

// Cart badge: clicking the cart adds 1 (demo only)
var cart = document.getElementById("cart-count");
document.querySelector(".nav-cart").addEventListener("click", function () {
    cart.textContent = parseInt(cart.textContent, 10) + 1;
});

// Back to Top
document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
