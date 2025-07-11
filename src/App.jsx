import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth";
import TherapistDirectory from "./pages/therapist";
import UserTherapySessions from "./pages/myTherapies";
import Chat from "./pages/message";
// import HomePage from "./pages/landing"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/sessions" element={<TherapistDirectory />} />
        <Route path="/my-sessions" element={<UserTherapySessions />} />
        <Route path="/chat/to/:to_id" element={<Chat />} />
      </Routes>
    </Router>
  );
}
export default App;