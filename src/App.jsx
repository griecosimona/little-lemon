import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                  <Route path="*" element={<>Not found.</>} />
                  <Route path="/" element={<Index />} />
              </Routes>
          </main>
      </BrowserRouter>
  )
}

export default App
