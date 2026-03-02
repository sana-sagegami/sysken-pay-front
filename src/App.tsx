import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChargePage from "./pages/charge";
import AdminPage from "./pages/admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          {/* <Route path="/buy" element={<BuyPage />} /> */}
          <Route path="/charge" element={<ChargePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
