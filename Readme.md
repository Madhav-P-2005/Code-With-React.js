# React.js using Vite – A Complete Guide  

## 📘 About This Repository

Welcome to **Code-With-React**, a curated and structured learning journey covering React.js from the basics to advanced concepts.  
This repository acts as a **knowledge base**, designed to help both myself and others revisit, reinforce, and practice key React concepts.

---

## 📚 Resources I'm Learning From

### 🎥 YouTube Playlists

1️⃣ **[React.js - Sigma Web Dev Tutorial](https://www.youtube.com/watch?v=nhSZ4LhIii8&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=105)**  
- Language: Hindi  
- Instructor: Haris Ali Khan (CodeWithHarry)  

2️⃣ **React Certification Course by Mrinal Bhattacharya  (Scaler - Topics)**  
- Focus on **Vite**-based project structure  
- Includes projects + certification  

---

## 🧠 Why React.js?

- 🔁 Efficient UI updates via **Virtual DOM**  
- ⚙️ Component-based architecture (modularity & reusability)  
- 📈 Scales well for small to large applications  
- 🧪 Easier testing and debugging  
- 🔄 One-way data flow ensures better control over state

---

## 📌 Concepts Covered So Far

✅ JSX & Virtual DOM  
✅ Functional Components  
✅ useState, useEffect, useMemo, useRef, useCallback  
✅ Conditional rendering & event handling  
✅ Props and prop drilling  
✅ useContext & Context API (including demo implemented)  
✅ React Router (`react-router-dom`)  
✅ Forms in React  
✅ Redux and Redux Toolkit (`react-redux`)  
✅ CORS and `body-parser` middleware  
✅ Used Express.js (backend setup) with frontend integration

---

## 🔧 Setting Up Environment

Ensure you have **Node.js** installed:

```bash
node -v
npm -v
````

### ✅ Vite-Based React App Setup (Recommended)

```bash
npm create vite@latest
cd vite-project
npm install
npm run dev
```

### 📦 Installing Packages

```bash
npm install bootstrap react-router-dom react-hook-form react-redux @reduxjs/toolkit cors body-parser express
```

### ▶️ Running Dev Server

```bash
npm run dev
```

---

## 🗂️ Folder Structure

```
vite-project/
│
├── backend/
│   └── server.js            # Basic Node.js + Express backend for handling requests
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── components2-Sigma/
│   ├── redux/
│   ├── use_Context/
│   ├── App_*.jsx            # Hook-wise learning files
│   ├── RouterApp.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── README.md
└── *.pdf                   # Notes and references
```

---

## 🔄 React vs Redux: Quick Comparison

| Feature      | React                     | Redux                                 |
| ------------ | ------------------------- | ------------------------------------- |
| Purpose      | Build UI using components | Manage global state across components |
| State Scope  | Local (per component)     | Global (centralized)                  |
| Data Flow    | One-way                   | One-way (actions → reducer → store)   |
| Sharing Data | Via props or Context      | Via store, selectors & dispatchers    |
| Ideal For    | UI logic, interactions    | Complex state logic (multi-component) |

---

## 🎯 Why Use Redux?

* Centralized state management
* Easier debugging with Redux DevTools
* Predictable state changes
* Scales better for large applications
* Middleware support (e.g., thunk, saga)

---

## 💬 Final Thoughts

This repository is more than just a collection of files — it represents my **learning journey** in React.js and modern frontend development.
By pushing it to GitHub, I hope it serves as a helpful reference for both myself and others stepping into the React ecosystem.

**Let’s build. Let’s debug. Let’s grow. 💻🔥**