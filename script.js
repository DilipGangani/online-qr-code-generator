let qr;

function generateQR() {
    const qrText = document.getElementById("qrText").value.trim();
    const qrResult = document.getElementById("qrResult");
    const downloadBtn = document.getElementById("downloadBtn");

    qrResult.innerHTML = "";
    downloadBtn.style.display = "none";

    if (!qrText) {
        alert("Please enter text or a URL");
        return;
    }

    qr = new QRCode(qrResult, {
        text: qrText,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    setTimeout(() => {
        const img = qrResult.querySelector("img");
        if (img) {
            downloadBtn.href = img.src;
            downloadBtn.style.display = "inline-block";
        }
    }, 300);
}





