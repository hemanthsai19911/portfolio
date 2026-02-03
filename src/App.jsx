import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { AnimatedBackground, GridBackground } from "./components/effects/AnimatedBackground";
import { FloatingElements, CodeSymbols } from "./components/effects/FloatingElements";
import { CursorFollower } from "./components/effects/CursorFollower";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom Cursor */}
      <CursorFollower />

      {/* Animated Backgrounds */}
      <AnimatedBackground />
      <GridBackground />
      <FloatingElements />
      <CodeSymbols />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="w-full max-w-[1600px] mx-auto overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
