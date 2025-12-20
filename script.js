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

let qrCode;

function generateQR() {
    const text = document.getElementById("qrText").value.trim();

    if (!text) {
        alert("Please enter text or URL");
        return;
    }

    document.getElementById("qrPreview").innerHTML = "";

    qrCode = new QRCodeStyling({
        width: 280,
        height: 280,
        type: "canvas",
        data: text,
        image: "logo.png", // YOUR LOGO
        qrOptions: {
            errorCorrectionLevel: "H"
        },
        imageOptions: {
            imageSize: 0.25,
            margin: 8
        },
        dotsOptions: {
            color: "#000000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#ffffff"
        }
    });

    qrCode.append(document.getElementById("qrPreview"));
}

function downloadQR() {
    if (!qrCode) {
        alert("Generate QR first");
        return;
    }

    qrCode.download({
        name: "qr-with-logo",
        extension: "png"
    });
}

#qrPreview {
    margin: 20px auto;
    width: fit-content;
}




