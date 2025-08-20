# 💰 Expense Tracker App (MERN Stack)

A fully responsive **Expense Tracker App** built with the **MERN stack (MongoDB, Express.js, React, Node.js)**.
This app allows users to securely manage their **income and expenses**, visualize data through **interactive charts**, and **export reports in Excel format**.

---

## ✨ Features

1. **User Authentication** – Secure login and signup using JWT.
2. **Dashboard Overview** – Displays Total Balance, Income, and Expenses in summary cards.
3. **Income Management** – Add, view, delete, and export income sources.
4. **Expense Management** – Add, view, delete, and export expenses with category-based tracking.
5. **Interactive Charts** – Visual representation of income & expenses (Bar, Pie, Line charts).
6. **Recent Transactions** – Displays latest income & expense records.
7. **Reports** – Download all income and expense data in Excel format.
8. **Responsive UI** – Mobile-first design, works across desktops, tablets, and mobiles.
9. **Intuitive Navigation** – Sidebar menu with Dashboard, Income, Expenses, Logout.
10. **Quick Delete** – Hover over cards to reveal a delete button for fast removal.

---

## 🛠 Tech Stack

**Frontend:** React, Tailwind CSS, Axios
**Backend:** Node.js, Express.js, JWT, Multer (for profile upload)
**Database:** MongoDB with Mongoose
**Others:** ExcelJS (for Excel export), Chart.js/Recharts

---

## 🔄 Project Workflow

### **Frontend Development**

* Set up React project with Tailwind CSS.
* Installed and configured required dependencies.
* Defined app routes for navigation.
* Built **Login** and **Signup** pages with form validation.
* Added **Profile Photo Selector** component.
* Created reusable **Axios instance** for API communication.
* Integrated **Login** and **Signup APIs** with JWT authentication.
* Implemented **User Context** for global state management.
* Developed **Dashboard Page** with:

  * Summary cards (Balance, Income, Expenses).
  * Recent transactions list.
  * Financial overview charts (Pie, Bar, Line).
  * Income and Expense detail sections.
* Built **Income Page** with form to add income, list view, delete functionality, and Excel export.
* Built **Expense Page** with form to add expense, list view, delete functionality, and Excel export.
* Ensured full **mobile responsiveness** with sidebar navigation and intuitive UI.

### **Backend Development**

* Initialized Node.js + Express project structure.
* Connected to MongoDB using Mongoose.
* Implemented **Authentication APIs**:

  * User Signup, Login, Get User Info.
  * Profile Image upload with Multer.
* Created **Income APIs**:

  * Add income, Fetch all incomes, Delete income, Export income data to Excel.
* Created **Expense APIs**:

  * Add expense, Fetch all expenses, Delete expense, Export expense data to Excel.
* Built **Dashboard APIs** to return aggregated balance, income, and expense statistics.

### **Integration & Testing**

* Connected frontend forms with backend APIs using Axios.
* Tested all CRUD operations (add, fetch, delete) for income and expenses.
* Verified JWT authentication with protected routes.
* Checked Excel export functionality for reports.
* Validated responsive design across mobile, tablet, and desktop.

✅ **End Result:** A **secure, responsive, and user-friendly expense tracker app** with authentication, income/expense management, interactive charts, and Excel reporting.

---

## 🚀 Installation & Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/Aashu09-hub/Expense-Tracker-App.git
   cd Expense-Tracker-App
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   npm start
   ```

   Create a `.env` file in `/backend` with:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Open the app in browser at:

   ```
   http://localhost:3000
   ```

