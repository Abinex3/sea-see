import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import WeatherSafety from "./pages/WeatherSafety";
import TideDaylight from "./pages/TideDaylight";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import CatchLog from "./pages/CatchLog";
import SOS from "./pages/SOS";
import Navbar from "./components/Navbar";
import Onboarding from "./pages/Onboarding";

const HIDE_NAVBAR_ON = ["/onboarding", "/login"];

function AppShell() {
  const location = useLocation();
  const showNavbar = !HIDE_NAVBAR_ON.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherSafety />} />
        <Route path="/tide" element={<TideDaylight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/catch-log" element={<CatchLog />} />
        <Route path="/sos" element={<SOS />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}