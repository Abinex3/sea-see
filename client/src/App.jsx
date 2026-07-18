import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeatherSafety from "./pages/WeatherSafety";
import TideDaylight from "./pages/TideDaylight";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import CatchLog from "./pages/CatchLog";
import SOS from "./pages/SOS";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherSafety />} />
        <Route path="/tide" element={<TideDaylight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/catch-log" element={<CatchLog />} />
        <Route path="/sos" element={<SOS />} />
      </Routes>
    </BrowserRouter>
  );
}