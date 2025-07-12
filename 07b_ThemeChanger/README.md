# 🌗 Theme Toggle App with React Context API

## 🔍 What’s This?

A simple React app that switches between **Light** and **Dark** mode using **Context API** and a **custom hook**.

---

## ✅ What I Learned

### 1️⃣ React Context API

- `createContext()` – used to create a global theme context.
- `ThemeContext.Provider` – wraps the entire app to provide `themeMode`, `lightTheme()`, and `darkTheme()` to all children.
- `useContext()` – used to access these values inside any component.

### 2️⃣ Custom Hook: `useTheme()`

- Simple wrapper around `useContext(ThemeContext)`.
- Makes accessing theme data/functions easier and reusable in multiple components.

### 3️⃣ useEffect for DOM Manipulation

```js
useEffect(() => {
  if (themeMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [themeMode]);
```

- Applies/removes `dark` class from `<html>` tag when theme changes.
- Enables Tailwind CSS dark mode classes.

---

## 🔧 How it Works (Steps)

1. `App.jsx` sets up `themeMode` in state and provides it using `ThemeProvider`.
2. `ThemeBtn.jsx` reads `themeMode`, `darkTheme()`, `lightTheme()` from the context using `useTheme()` hook.
3. On toggle, the checkbox switches theme and updates the DOM.
4. Tailwind uses `dark:` classes to change styles based on the class applied to `<html>`.

---

## 🗂️ Folder Overview

```
📁 src
 ┣ 📂Components
 ┃ ┗ 📄 ThemeBtn.jsx
 ┣ 📂Context
 ┃ ┗ 📄 Theme.js
 ┣ 📄 App.jsx
 ┗ 📄 index.css
```

---

## 🧠 Mini Glossary

| Term         | Meaning                                       |
| ------------ | --------------------------------------------- |
| Context API  | Share data (like theme) globally              |
| `useContext` | Access context data inside a component        |
| Custom Hook  | Reusable function with built-in React logic   |
| `useEffect`  | Runs code when something changes (like theme) |

---
