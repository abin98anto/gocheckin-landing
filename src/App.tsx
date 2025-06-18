import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage/LandingPage";
import SignupPage from "./page/UserAuthPages/SignupPage/SignupPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Toaster richColors />
    </>
  );
}

export default App;
