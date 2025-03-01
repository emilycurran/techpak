// Function to hide pigeon & text and show the PDF
function showPDF() {
    document.getElementById("content").style.display = "none"; // Hide pigeon and text
    document.getElementById("pdfViewer").style.display = "block"; // Show PDF
}

// Add event listeners to both the pigeon image and the text
document.getElementById("pigeon").addEventListener("click", showPDF);
document.getElementById("techpack").addEventListener("click", showPDF);
