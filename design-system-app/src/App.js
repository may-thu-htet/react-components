import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AmazonList from "./url/AmazonList";
import GoogleList from "./url/GoogleList";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/amazon-list">Amazon Questions List</Link>
            </li>
            <li>
              <Link to="/google-list">Google Questions List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/amazon-list" element={<AmazonList />}></Route>
          <Route path="/google-list" element={<GoogleList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
