# Bachelor's Kitchen – MERN Food Delivery App

Bachelor's Kitchen is a modern food delivery web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse a menu, add items to their cart, place orders, and enjoy a seamless food ordering experience.

## Features

- User authentication and profile management
- Browse and filter food menu by category
- Add/remove items from cart
- Place orders with delivery address
- Stripe payment integration
- Order history and status tracking
- Responsive UI for desktop and mobile
- Admin panel for managing menu and orders

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT
- **Payments:** Stripe
- **Other:** dotenv, mongoose

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account (or local MongoDB)
- Stripe account (for payments)

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/RohitGo8789/Bachelor-Kitchen.git
    cd mern-food-delivery-app
    ```

2. **Backend Setup:**
    ```
    cd backend
    npm install
    ```
    - Create a `.env` file in the `backend` folder with:
      ```
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      STRIPE_SECRET_KEY=your_stripe_secret_key
      FRONTEND_URL=http://localhost:3000
      ```

    - Start the backend server:
      ```
      npm start
      ```

3. **Frontend Setup:**
    ```
    cd ../frontend
    npm install
    npm start
    ```

4. **Access the app:**
    - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
mern-food-delivery-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## License

This project is for educational purposes.

---

**Made with ❤️ by Bachelor's Kitchen**