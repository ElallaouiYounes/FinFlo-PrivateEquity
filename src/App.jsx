import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Learn from "./pages/learn";
import Use from "./pages/use";
import Build from "./pages/build";
import Participate from "./pages/participate";
import Research from "./pages/research";
import Donate from "./pages/donate";
import Personal from "./pages/Personal";
import Team from "./pages/team";
import Business from "./pages/business";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/use" element={<Use />} />
          <Route path="/build" element={<Build />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/research" element={<Research />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/team" element={<Team />} />
          <Route path="/business" element={<Business />} />
          <Route path="/not-found" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
