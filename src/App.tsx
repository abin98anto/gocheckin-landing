import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage/LandingPage";
import SignupPage from "./page/UserAuthPages/SignupPage/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
