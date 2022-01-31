import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route extact path="/" element={<Homepage />} />
          {/* <Route extact path="/details" element={<DetailsPage />} /> */}
          <Route
            extact
            path="/details/overview/:id"
            element={<DetailsPage />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
