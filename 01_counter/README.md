# ⚛️ React useState Practice – Counter & Name Form

This beginner-friendly React project combines two simple mini-apps built using functional components and the `useState` hook.

1. ✅ Counter App – Increases or decreases a number between 0 and 10
2. ✅ Name Form – Displays a live greeting based on user input

---

## 🚀 Features

### 🔢 Counter App

- Displays a live counter value
- "Add Value" button to increase the counter
- "Remove Value" button to decrease the counter
- Counter is restricted between 0 and 10 using conditional checks

### 📝 Name Form

- Controlled input field using React state
- Updates the displayed greeting in real-time as the user types

---

## 📚 What I Learned

### ✅ useState Hook

This project taught me how to use the `useState` hook in React to create dynamic and interactive UIs.

```js
const [count, setCount] = useState(0);
const [name, setName] = useState("");
```

- `useState` returns a state variable and a function to update it.
- When state is updated, React automatically re-renders the component to reflect the change.

---

### 🔄 Event Handling + State Update

I learned how React handles user events like `onClick` and `onChange`, and how to update state inside those events.

- You must wrap the state update in an arrow function like `() => setCount(count + 1)` to prevent it from running during render.
- I also learned how to make **controlled components** by syncing input fields with state.

```js
const addValue = () => {
  if (count >= 10) {
    setCount(10);
    return;
  }
  setCount(count + 1);
};

const remValue = () => {
  if (count <= 0) {
    setCount(0);
    return;
  }
  setCount(count - 1);
};
```

```js
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
/>
```

---

## 📁 Project Structure

```
src/
├── App.jsx         # Contains both Counter and NameForm logic
├── App.css
├── assets/         # Vite or React logos (optional)
public/
package.json
README.md
```

---

## 🛠️ Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- Vite (or Create React App)
- CSS

---

## ▶️ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-usestate-practice.git
cd react-usestate-practice
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 💡 Future Improvements

- Add a reset button to set counter back to 0
- Disable Add/Remove buttons when limits are reached
- Extract `NameForm` into a separate component file
- Add validation or character limit for input field
- Style the project using Tailwind or custom CSS

---

## 📌 Final Thoughts

This project gave me hands-on experience with the `useState` hook in React.  
I learned how to:

- Track and update values with state
- React to user input in real time
- Make components interactive and controlled

This is a solid foundation in React — and I'm ready to take on `useEffect`, props passing, and more!
