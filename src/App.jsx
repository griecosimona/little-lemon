import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Hero />
          <main className="min-h-[calc(100vh-135px)] max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                  <Route path="*" element={<>Not found.</>} />
                  <Route path="/" element={<Index />} />
              </Routes>
          </main>
          <Footer />
      </BrowserRouter>
  )
}

export default App
