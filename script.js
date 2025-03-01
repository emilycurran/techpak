document.getElementById("techpack").addEventListener("click", function() {
    window.location.href = "tech_pack.pdf"; // Redirects the whole page to the PDF
});

document.addEventListener("touchstart", function() {
    document.querySelector("img, svg").style.animation = "wiggle 0.5s infinite ease-in-out alternate";
});
