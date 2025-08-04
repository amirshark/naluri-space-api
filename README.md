# 🧠 Naluri Pi Calculation API

This is the backend service for the Naluri Space Project coding assessment. It calculates the value of π (Pi) algorithmically using a simple method and serves the result through HTTP endpoints.

---

## 📀 Method Used: Gregory–Leibniz Series

The Pi calculation is performed using the **Gregory–Leibniz series**, defined as:

$$
\pi = 4 \left(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots \right)
$$

This method is easy to implement but converges very slowly, making it suitable for demonstration or educational purposes.

---

## 🚀 Features

* Incrementally calculates π in the background
* REST API endpoints to start, pause, reset, and retrieve the current value
* Tracks decimal place accuracy
* Simple Node.js server using Express

---

## 📁 Project Structure

```
backend/
├── piCalculator.js         # Core algorithm logic
├── index.js                # Express server and routing
├── package.json
└── README.md
```

---

## 📦 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

By default, it runs on `http://localhost:3000`

---

## 📱 API Endpoints

| Method | Endpoint | Description                      |
| ------ | -------- | -------------------------------- |
| GET    | `/pi`    | Get current π value and accuracy |
| POST   | `/start` | Start calculating π              |
| POST   | `/pause` | Pause calculation                |
| POST   | `/reset` | Reset π value                    |

---

## ⚙️ Environment Variables

Create a `.env` file if needed (e.g. to define port):

```
PORT=3000
```

---

## 📌 Notes

* The calculation runs in intervals (`setInterval`) every 100ms
* You can increase the frequency or optimize the algorithm for better performance

---

## 📊 Improvement Ideas

* Switch to faster algorithms (e.g. Nilakantha, Chudnovsky)
* Save progress to file or DB for persistence
* Add WebSocket for real-time updates
* Implement rate limiting for the API

---

## 🪪 License

This project is part of the Naluri Tech Assessment and is intended for evaluation purposes only.
