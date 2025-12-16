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

    // Generate QR as canvas
    new QRCode(qrResult, {
        text: qrText,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Wait for QR to render
    setTimeout(() => {
        const canvas = qrResult.querySelector("canvas");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        const logo = new Image();
        logo.src = "logo.png";

        logo.onload = function () {
            const logoSize = canvas.width * 0.2; // 20% of QR size
            const x = (canvas.width - logoSize) / 2;
            const y = (canvas.height - logoSize) / 2;

            // White background behind logo
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x - 6, y - 6, logoSize + 12, logoSize + 12);

            // Draw logo in center
            ctx.drawImage(logo, x, y, logoSize, logoSize);

            // Enable download
            downloadBtn.href = canvas.toDataURL("image/png");
            downloadBtn.style.display = "inline-block";
        };
    }, 300);
}
