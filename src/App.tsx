import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChargePage from "./pages/charge";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/charge" element={<ChargePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
