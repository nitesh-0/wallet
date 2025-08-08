# 💸 PayFlow — Seamless Money Transfers Made Simple

PayFlow is a modern full-stack web application that enables users to create accounts, sign in securely, view account balances, and transfer money between users with **atomic transaction consistency**.  
Built with **React + Tailwind** on the frontend and **Node.js + Express + MongoDB** on the backend, PayFlow ensures a smooth, secure, and responsive experience.

---

## 🚀 Features

- **User Authentication & Authorization**
  - Sign up, sign in, and secure JWT-based authentication.
  - Unauthorized users are restricted from accessing protected routes.

- **Money Transfers**
  - Instant transfers between users.
  - Atomic transactions powered by `mongoose.startTransaction()` ensuring **all-or-nothing** execution.

- **Account Management**
  - View account balance.
  - Update user profile.
  - Retrieve your own user details.
  - Fetch all users except the currently logged-in one.

- **Dynamic UI**
  - **Appbar** with context-aware navigation buttons.
  - Route-based button visibility and styles.
  - Avatar with hoverable logout popup.



---

## 🛠 Tech Stack

### **Frontend**
- React
- React Router
- Tailwind CSS
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ORM)
- JWT (Authentication)
- Zod (Input validation)

---

## 📡 API Endpoints

### **User Routes** — `/api/v1/user`
| Method | Endpoint     | Description |
|--------|-------------|-------------|
| POST   | `/signup`   | Create a new user |
| POST   | `/signin`   | Authenticate user and return JWT |
| PUT    | `/update`   | Update user details |
| POST   | `/logout`   | Invalidate session (frontend clears token) |
| GET    | `/me`       | Get current authenticated user's details |
| GET    | `/bulk`     | Get all users except the current one |

### **Account Routes** — `/api/v1/account`
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| GET    | `/balance`   | Retrieve account balance |
| POST   | `/transfer`  | Transfer money to another account (atomic transaction) |

---

## 🖥 Frontend Routes

| Path       | Description |
|------------|-------------|
| `/landing` | Landing page with CTA |
| `/dashboard` | Authenticated user dashboard |
| `/signin`  | Sign in page |
| `/signup`  | Sign up page |
| `/send`    | Send money to a user |

---

## 🔒 Security
- **JWT Authentication** to protect API routes.
- **Route Guards** in frontend to prevent unauthorized access.
- Input validation via **Zod** to ensure safe and predictable backend processing.


---

## ⚡ Getting Started

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/nitesh-0/wallet.git
