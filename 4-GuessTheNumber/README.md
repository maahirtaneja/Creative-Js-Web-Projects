# 🤔 Guess The Number  

A fully interactive number guessing game where the user tries to guess a random number between 1 and 100 in 10 attempts. Built with HTML, CSS, and JavaScript, this game reinforces essential programming concepts like conditionals, loops, event handling, arrays, and user feedback.

---

## 🚀 Live Demo  
Play the game here: [Guess The Number](https://maahirtaneja.github.io/Creative-Js-Web-Projects/4-GuessTheNumber)

---

## 🎮 How the Game Works  

- A **random number** between 1 and 100 is generated using `Math.random()`.  
- The player has **10 chances** to guess the correct number.  
- After each guess, the game:
  - ✅ Tells if the guess is **correct**
  - 🔼 Says if the guess is **too high**
  - 🔽 Says if the guess is **too low**
  - 📛 Prevents duplicate guesses
- Once the player guesses correctly or uses all attempts, the game ends.  
- A **"Start New Game"** button appears to reset and play again.

---

## 📌 Features  
- 🧠 **Intelligent Feedback** – Shows hints (Too High/Too Low) after each guess  
- 📋 **Previous Guesses Tracking** – Display all previous attempts  
- 🛑 **Duplicate Guess Warning** – Prevents users from repeating the same number  
- ⏱️ **Guess Counter** – Displays remaining attempts  
- 🔄 **Game Reset** – Resets the game dynamically without reloading the page  
- 🧼 **Input Validation** – Handles empty, invalid, or out-of-range inputs gracefully  
- 📱 **Responsive UI** – Optimized for different screen sizes

---

## 🛠️ Technologies Used  

| Tech | Purpose |
|------|---------|
| **HTML** | Structure and input form |
| **CSS** | Layout, buttons, and feedback styling |
| **JavaScript** | Game logic, event listeners, number generation, and DOM manipulation |

---

## 📂 Folder Structure  
```
4-GuessTheNumber/
├── index.html     ← 🎮 Game layout and inputs
├── style.css      ← 🎨 Styling and layout
├── script.js      ← ⚙️ Game logic and interactivity
└── README.md      ← 📘 Project description
```
---

## 🔍 Core JavaScript Concepts Used  

- `Math.random()` and `Math.floor()` – for generating random numbers  
- `addEventListener()` – to handle button clicks and user input  
- Arrays – to store and display previous guesses  
- Conditions – to check if guess is valid, too high/low, or correct  
- DOM Manipulation – for updating messages, disabling inputs, resetting game  
- Dynamic Element Creation – the “Start New Game” button is created via JS

---

## 🧠 What I Learned  

✅ How to write clean game logic using conditional statements  
✅ Handling real-time user interaction using event-driven programming  
✅ Providing intuitive feedback to improve UX  
✅ How to manage game state using variables and arrays  
✅ Building and resetting a game loop without reloading the page


---

## 🎯 Possible Future Enhancements

- 🧩 **Add Difficulty Levels**  
  Allow users to choose between Easy (10 chances) and Hard (5 chances).

- 🔊 **Include Animations or Sounds**  
  Add visual or audio feedback for correct guesses, wrong attempts, and game over.

- 🧮 **Create a Scoring System**  
  Calculate score based on how quickly the user guesses the number.

- 💾 **Track High Scores Using `localStorage`**  
  Save the user's best score locally and display it on the game screen.

---

## 📝 How to Run  

To run locally:  
1. Clone the repository  
   ```
   git clone https://github.com/maahirtaneja/Creative-Js-Web-Projects.git
2. Navigate to the project 
     ```
   cd Creative-Js-Web-Projects/4-GuessTheNumber
3.	Open index.html in your browser

---

## 📧 Contact

For any queries, reach out at maahirtaneja@gmail.com

© 2025 Maahir Taneja | Built with ❤️
