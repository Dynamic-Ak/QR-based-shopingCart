function startScanner() {
  const scanner = new Html5Qrcode("reader");
  const config = { fps: 10, qrbox: 250 };

  scanner.start({ facingMode: "environment" }, config,
    (decodedText, decodedResult) => {
      console.log(`QR Code: ${decodedText}`);
      addToCart(decodedText);
      scanner.stop();
    },
    (error) => {
      console.warn(`QR error: ${error}`);
    }
  );
}
