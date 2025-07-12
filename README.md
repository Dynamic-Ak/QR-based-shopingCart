
# 🛒 QR-Based Self-Checkout Web App

A lightweight web-based self-checkout system that allows users to scan product QR codes, automatically add them to a virtual cart, and complete payment. Ideal for modern retail kiosks, college hackathons, or digital checkout demos.

Built using:

* HTML5 QR Code Scanner (html5-qrcode)
* JavaScript (frontend logic)
* Firebase (for storing orders)
* LocalStorage (for cart management)

Live demo link : 


---

## 🚀 Features

* Real-time QR scanning via webcam (no external device needed)
* Dynamic cart handling using LocalStorage
* Sample product inventory (products.json)
* Checkout system connected to Firebase Firestore
* Receipt confirmation page
* Mobile-friendly responsive UI

---

## 🧰 Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Frontend   | HTML, CSS, JavaScript     |
| QR Scanner | html5-qrcode (JS library) |
| Backend    | Firebase Firestore        |
| Hosting    | GitHub Pages / Firebase   |

---

## 📦 Folder Structure

qr-checkout/
├── index.html         ← QR Scanner Page
├── cart.html          ← Cart & Pay Page
├── receipt.html       ← Success Receipt
├── products.json      ← Sample Inventory
├── style.css          ← Styling
└── js/
├── scanner.js     ← QR Scanning Logic
├── cart.js        ← Cart Handling Logic
└── firebase.js    ← Firebase Integration

---

## 🔧 Setup Instructions

1. Clone this repo:

```bash
git clone https://github.com/your-username/qr-checkout.git
cd qr-checkout
```

2. Install dependencies:

No packages required. It’s 100% front-end powered.

3. Start a local server:

For Python users:

```bash
python3 -m http.server
```

Visit [http://localhost:8000](http://localhost:8000) in your browser.

4. Replace Firebase config in js/firebase.js:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

Set up a Firestore database and a collection named orders.

5. Generate QR codes:

Use [https://www.qr-code-generator.com](https://www.qr-code-generator.com) or any QR generator to encode product IDs from products.json (e.g. 101, 102, etc.)

---

## 🧪 Example QR Inventory (products.json)

```json
[
  { "id": "101", "name": "Soap", "price": 30 },
  { "id": "102", "name": "Shampoo", "price": 75 },
  { "id": "103", "name": "Toothpaste", "price": 45 }
]
```

Scan these IDs using QR codes.

---

## 🧠 Possible Enhancements

* Cart quantity adjustment
* Product image support
* QR code history log
* Admin dashboard for product management
* Authentication with Firebase Auth

---

## 🙌 Acknowledgments
* Firebase Firestore: [https://firebase.google.com/](https://firebase.google.com/)

---

## 📜 License

This project is open-source and available under the MIT License.
