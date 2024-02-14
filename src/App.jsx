import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import { useState } from "react";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout scrolled={scrolled} setScrolled={setScrolled} />
          }
        >
          <Route
            index
            element={<Home scrolled={scrolled} setScrolled={setScrolled} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
