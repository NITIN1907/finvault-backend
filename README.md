# 💰 Finance Data Processing & Access Control Backend

A backend system built using **Node.js, Express, and MySQL** that manages financial records with **role-based access control (RBAC)** and provides **dashboard analytics**.

---

## 🚀 Overview

This project simulates a real-world finance dashboard backend where different users (Viewer, Analyst, Admin) interact with financial data based on their roles.

It demonstrates:

* Clean backend architecture
* Proper API design
* Role-based authorization
* SQL-based aggregations
* Validation & error handling

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Other:** dotenv, mysql2

---

## 📂 Project Structure

```
finance-backend/
│
├── config/
│   └── db.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── modules/
│   ├── users/
│   │   ├── user.controller.js
│   │   ├── user.service.js
│   │   └── user.routes.js
│   │
│   ├── finance/
│   │   ├── finance.controller.js
│   │   ├── finance.service.js
│   │   └── finance.routes.js
│   │
│   └── dashboard/
│       ├── dashboard.controller.js
│       ├── dashboard.service.js
│       └── dashboard.routes.js
│
├── utils/
│   └── validator.js
│
├── server.js
├── .env
└── package.json
```

---

## ✨ Features

### 👤 User & Role Management

* Create users
* Assign roles (Viewer, Analyst, Admin)
* User status (active/inactive)

---

### 💳 Financial Records

* Create, update, delete records
* Filter by:

  * Type (income/expense)
  * Category
  * Date range
* Pagination support
* Soft delete support

---

### 📊 Dashboard APIs

* Total income & expenses
* Net balance
* Category-wise totals
* Monthly trends
* Recent transactions

---

### 🔐 Role-Based Access Control (RBAC)

| Role    | Permissions                   |
| ------- | ----------------------------- |
| Viewer  | Read-only access              |
| Analyst | Read + dashboard insights     |
| Admin   | Full access (users + records) |

---

### 🛡️ Validation & Error Handling

* Input validation via utility functions
* Global error handling middleware
* Proper HTTP status codes

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-link>
cd finance-backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create `.env` file:

```
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=finance_db
```

---

### 4. Setup Database

Run in MySQL:

```sql
CREATE DATABASE finance_db;
```

Create tables:

* roles
* users
* financial_records

(Refer to project SQL schema)

---

### 5. Run Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## 🔑 Authentication (Mock)

This project uses **header-based mock authentication**.

Include header in every request:

```
user-id: <user_id>
```

---

## 📡 API Endpoints

### 👤 Users

| Method | Endpoint   | Description |
| ------ | ---------- | ----------- |
| POST   | /api/users | Create user |
| GET    | /api/users | Get users   |

---

### 💳 Financial Records

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | /api/records     | Create record              |
| GET    | /api/records     | Get records (with filters) |
| PUT    | /api/records/:id | Update record              |
| DELETE | /api/records/:id | Soft delete record         |

---

### 📊 Dashboard

| Endpoint                  | Description              |
| ------------------------- | ------------------------ |
| /api/dashboard/summary    | Income, expense, balance |
| /api/dashboard/categories | Category totals          |
| /api/dashboard/monthly    | Monthly trends           |
| /api/dashboard/recent     | Recent transactions      |

---

## 🔍 Example Requests

### Create Record

```json
{
  "user_id": 1,
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "note": "April salary",
  "record_date": "2026-04-01"
}
```

---

### Filter Records

```
GET /api/records?type=expense&category=food
```

---

### Pagination

```
GET /api/records?limit=5&offset=0
```

---

## 🧠 Key Design Decisions

* **Service Layer** for business logic separation
* **Middleware-based RBAC** for centralized access control
* **Parameterized Queries** to prevent SQL injection
* **Dynamic SQL Filtering** for flexible queries
* **Aggregation Queries** for dashboard performance

---

## 📌 Assumptions

* Authentication is simulated using headers
* Roles are predefined (viewer, analyst, admin)
* Focus is on backend design, not UI

---

## 🚀 Future Improvements

* JWT Authentication
* Swagger API documentation
* Unit & integration testing
* ORM integration (Prisma/Sequelize)
* Deployment (Render / AWS / VPS)

---

## 👨‍💻 Author

Built as part of a backend engineering:

* System design thinking
* Clean architecture
* Real-world backend practices

---
