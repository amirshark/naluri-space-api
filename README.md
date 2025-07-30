# Pi Calculation Server

This is the backend server for the Naluri Mobile Coding Challenge. It provides a RESTful API that calculates Pi to increasing accuracy using a known algorithm and stores the most precise value. It supports control endpoints to start, pause, and reset the calculation.

## Features

- Incremental Pi calculation
- Stores and returns the most accurate value
- REST API for controlling the calculation
- Persistent value in memory
- Compatible with React Native mobile app via HTTP

## API Endpoints

### `GET /pi`
Returns the current value of Pi and its accuracy.

```json
{
  "pi": "3.1415",
  "accuracy": 4
}
```

### `POST /start`
Starts the Pi calculation in the background.

### `POST /pause`
Pauses the current calculation.

### `POST /reset`
Resets the Pi value and calculation state.

## How It Works

The server runs a Pi calculation algorithm (e.g., the Nilakantha series or Leibniz formula) in a loop. It calculates the next digit of Pi and updates an in-memory variable. The calculation continues until paused or stopped.

## Tech Stack

- Node.js (or Python/FastAPI depending on your implementation)
- Express (or equivalent)
- In-memory storage for simplicity (can be replaced with Redis or DB)

## How to Run

```bash
# Install dependencies
npm install

# Start server
npm start
```

By default, the server runs at `http://localhost:3000`. You can configure this using environment variables or `.env` file.

## Environment Variables

- `PORT`: Port number (default: 3000)

## Folder Structure

```
backend/
├── server.js
├── piCalculator.js
├── routes/
├── controllers/
├── .env
└── package.json
```

## Notes

- This is a demo backend and may not be suitable for large-scale production use.
- Ensure the server is always running to continue improving Pi accuracy.

## License

MIT License