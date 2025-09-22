# OptiRoute 🚀

_A Visual Traveling Salesman Problem (TSP) Solver_

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&style=flat)
![ReactFlow](https://img.shields.io/badge/ReactFlow-11-blue?style=flat)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38b2ac?logo=tailwind-css&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black&style=flat)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white&style=flat)

## Overview

OptiRoute is a React-based web app that allows users to **create graphs**, **assign edge weights**, and **solve the Traveling Salesman Problem (TSP)** using a brute-force algorithm.  
It provides an **interactive graph canvas** powered by ReactFlow and a **step-by-step solution display** with detailed path costs.

---

## Features

- Interactive graph editor (add nodes & edges by clicking)
- Assign custom weights (edge costs)
- Brute-force TSP solver (O(n!))
- Visualize the optimal route & path details
- Download presentation (PPTX)
- Built with **React, TailwindCSS, ReactFlow**

---

## Live Demo

https://opti-route-mu.vercel.app/

Try it locally 👇

---

## Installation

```bash
# Clone repo
git clone https://github.com/HoussemEddineChaouch/optiroute.git
cd optiroute

# Install dependencies
npm install

# Start dev server
npm start
```

## Usage

1. Double-click on the canvas to add nodes.
2. Connect nodes by dragging edges → enter a weight.
3. Click "Solve TSP with Brute Force".
4. View the optimal path and cost in the results panel.
5. Reset to start a new problem instance.

## Project Structure

```bash
src/
 ├── components/
 │    ├── GraphCanvas.jsx
 │    ├── ControlPanel.jsx
 │    ├── ResultPanel.jsx
 ├── algorithms/
 │    └── tspBruteForce.js
 ├── functions/
 │    └── graphToMatrix.js
 ├── App.js
 └── index.js
```

## Algorithm

- TSP Brute Force: Generates all possible permutations of nodes.
- Selects the minimum-cost cycle that visits all nodes exactly once.
- Handles disconnected graphs (returns "No valid path").

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### Contribution Guidelines

- Please make sure your code follows the existing style.
- Add comments where necessary for clarity.
- Test your changes before submitting.
- If fixing a bug, include the issue number in your commit message.
- Keep PRs focused on a single change (easier to review).

### Ideas for Contributions

- Add more TSP algorithms (e.g., Genetic Algorithm, Nearest Neighbor).
- Improve UI/UX with more visualizations.
- Add dark mode or themes.
- Write unit tests to ensure algorithm correctness.
- Translate UI into other languages.

## License

MIT License © 2025 Houssem Eddine Chaouch
