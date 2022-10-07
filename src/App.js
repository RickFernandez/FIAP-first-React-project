import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Css } from "./App.css";
// import { NormalizeStyles } from "./shared/NormalizeStyles";

import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { NotFound } from "./screens/NotFound";

export function App() {
  return (
      <>
        {/* <NormalizeStyles /> */}
        <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home /> } exact />
              <Route path="/About" element={ <About /> } exact />
              <Route path="*" element={ <NotFound /> } exact />
            </Routes>
        </BrowserRouter>
      </>
    );
}