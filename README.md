# Apple MacBook Pro - 3D Showcase

A pixel-perfect, interactive clone of the Apple MacBook Pro product page, built with React, Three.js (R3F), and GSAP. This project was created to demonstrate advanced skills in 3D web rendering and complex, scroll-based animations.

### [Live Demo] (https://harshit-apple-build.onrender.com/ )---

![Project Screenshot]<img width="1919" height="1013" alt="Image" src="https://github.com/user-attachments/assets/b2cef5b0-eab8-4e76-970f-f35de936d481" />
## 🚀 About This Project

This is a high-fidelity recreation of Apple's signature product page. It's not just a static website; it's a fully interactive experience that mimics the original's dynamic behavior, from the 3D model viewer to the "magic" scroll-based animations.

The goal was to build a site that not only *looks* like Apple's but *feels* like it, paying close attention to performance, transitions, and user interaction.

## 🛠 Tech Stack

This project was built using a modern, high-performance web stack:

* **Frontend:** [React.js](https://reactjs.org/)
* **3D Rendering:** [Three.js](https://threejs.org/) (via [React Three Fiber](https://github.com/pmndrs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei))
* **Animations:** [GSAP (GreenSock)](https://greensock.com/gsap/) (with ScrollTrigger)
* **Global State:** [Zustand](https://github.com/pmndrs/zustand)
* **Bundler:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## ✨ Key Features

* **Interactive 3D Model:** A real-time 3D model viewer that allows users to:
    * Spin the model 360 degrees.
    * Instantly switch between "Silver" (White) and "Space Gray" (Dark) colors.
    * Animate a seamless transition when switching between 14" and 16" models.
* **Dynamic Model Switching:** A custom GSAP animation handles the swapping of the 14" and 16" models, moving them on/off the screen with a smooth fade and slide.
* **Global State Management:** Uses Zustand to manage the global state for the model's color and size, making it accessible to both the UI controls and the 3D scene.
* **Scroll-Driven Animations:** Leverages GSAP's ScrollTrigger plugin to:
    * Reveal the "M4" chip showcase.
    * Animate the highlights and features section, syncing the visuals with the scroll position.
* **Hero Video Section:** Replicates the full-page video hero from the original site.
* **Developer's Note:** Includes a non-intrusive "About this Project" modal to credit the developer and explain the tech stack.

## 📦 How It Works

1.  **3D Models:** The 14" and 16" MacBook `.glb` models are loaded using React Three Fiber's `useGLTF` hook.
2.  **State:** The Zustand store holds `color` and `scale` variables.
3.  **Interaction:**
    * When a user clicks a color button, the `setColor` action is called.
    * The `Macbook-14.jsx` (and 16) component "listens" to this state change with a `useEffect` hook.
    * This hook traverses the 3D model's scene, finds the main body meshes (e.g., `"Object_48"`), clones their material, and sets the new color (`white` for Silver, `#2e2c2e` for Dark).
    * It also sets `material.needsUpdate = true` to force Three.js to re-render the lighting.
4.  **Model Switching:**
    * The `ModelSwitcher.jsx` component renders *both* models at all times.
    * A `useGSAP` hook listens to changes in the `scale` state.
    * If the user selects the 16" model, GSAP animates the 16" model's position to `x: 0` (center) and the 14" model to `x: -5` (off-screen), and vice-versa.
    * A helper function simultaneously animates the opacity of the models' meshes for a smooth fade-in/out.

## 🚀 Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Harshit8bit/Apple-build.git](https://github.com/Harshit8bit/Apple-build.git)
    cd Gsap-macbook
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

Built by [Harshit Agarwal](https://github.com/Harshit8bit). This project is for educational and portfolio purposes only.