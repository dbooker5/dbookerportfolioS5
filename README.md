# Modern Developer Portfolio

A high-performance, visually stunning developer portfolio website built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). This project leverages [Aceternity UI](https://ui.aceternity.com/) components to deliver a premium, modern aesthetic with smooth animations and 3D effects.

## 🚀 Key Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router) and React 19.
- **Stunning UI/UX**: Utilizes Aceternity UI for high-quality components like Bento Grids, 3D Pins, and Spotlight effects.
- **Smooth Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) and [Three.js](https://threejs.org/) (via React Three Fiber).
- **Responsive Design**: Fully responsive layouts optimized for all devices using Tailwind CSS.
- **Dark Mode**: Sleek dark-themed interface.
- **Easy Customization**: Content is separated into a data file for easy updates.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/) (if used), [React Lottie](https://github.com/chenqingspring/react-lottie)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **UI Library**: [Aceternity UI](https://ui.aceternity.com/)

## 🏁 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/dbookerportfolios5.git
    cd dbookerportfolios5
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: React components.
  - `ui/`: Reusable UI components (mostly from Aceternity UI).
- `data/`: Static data files (e.g., `index.ts`) containing portfolio content like projects, testimonials, and navigation items.
- `public/`: Static assets like images and icons.

## 🎨 Customization

To customize the portfolio with your own information:

1.  Open `data/index.ts`.
2.  Update the `navItems`, `gridItems`, `projects`, `testimonials`, `companies`, `workExperience`, and `socialMedia` arrays with your own data.
3.  Replace images in the `public/` directory as needed.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
