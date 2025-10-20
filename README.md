# LiveCheckmate

Description
LiveCheckmate is a web-based real-time two-player chess game built with React on the frontend and Node.js on the backend. It streams game state via Server-Sent Events (SSE) and processes player moves, showcasing a clean architecture, in-memory state management, live updates, and chess move validation.

## Tech Stack

- React
- Node.js

## Requirements

- Real-time communication using Server-Sent Events
- In-memory game state management
- Chess move validation logic

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/yourusername/livecheckmate.git
   
2. Install dependencies for server and client:
   bash
   cd livecheckmate/server && npm install
   cd ../client && npm install
   
3. Create a `.env` file in the `server` directory:
   bash
   echo 'PORT=4000' > .env
   
4. (Optional) Adjust any environment variables as needed.

## Usage

1. Start the backend server:
   bash
   cd server
   npm start
   
2. Start the React client:
   bash
   cd ../client
   npm start
   
3. Open your browser and navigate to `http://localhost:3000` to create or join a chess game.

## Implementation Steps

1. Initialize a Node.js project in the `server` folder and install Express.
2. Create an SSE endpoint at `/events` using Express to push live game updates.
3. Build an in-memory store (a JavaScript object keyed by game IDs) to track active games.
4. Implement basic chess move validation logic in a utility module (or stub it for MVP).
5. Define REST endpoints in Express:
   - `POST /move` for submitting moves
   - `GET /events` for streaming game state updates
6. Scaffold the React application in the `client` directory using Create React App.
7. In React, use the EventSource API to subscribe to `/api/events` and handle incoming updates.
8. Create React components for the chessboard, move input form, and game status display.
9. Manage client-side state with React hooks (`useState`, `useEffect`) to reflect live game data.
10. Test two-player functionality locally, ensuring real-time updates work and basic chess rules are enforced.

## API Endpoints

- GET /events  
  Streams live game state updates via Server-Sent Events.

- POST /move  
  Submits a chess move. Payload:
  
  { gameId, from, to }