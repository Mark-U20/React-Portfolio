import React, { useState, StrictMode } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Contact from "./Contact";
import { createRoot } from "react-dom/client";
import Projects from "./Projects";
import Footer from "./Footer";
const container = document.getElementById("root")!;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
import Contact from "./Contact";

const App = () => {
  return (
    <StrictMode>
      <div className="h-screen w-screen bg-green-200">
        <BrowserRouter>
          <header className="flex gap-10 p-2 justify-center bg-green-400	">
            <Link to="/">Mark Ustby's Portfolio</Link>
            <a href="https://github.com/Mark-U20">Github</a>
            <Link className=" hover:text-gray-200" to="/contact">
              Contact Me
            </Link>
          </header>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Projects />
        </BrowserRouter>
        <Footer />
      </div>
    </StrictMode>
  );
};

root.render(<App />);
