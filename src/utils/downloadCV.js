function downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/CV.pdf";
    link.download = "Stefani-Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}