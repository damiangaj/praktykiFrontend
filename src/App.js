
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditFormPage from "./pages/EditFormPage/EditFormPage";
import CreateFormPage from "./pages/CreateFormPage/CreateFormPage";
import HomePage from "./pages/HomePage/HomePage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";



function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
              <ResponsiveAppBar/>
          </header>
          <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit/:id" element={<EditFormPage />} />
                <Route path="/create" element={<CreateFormPage />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
