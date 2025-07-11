import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth";
import TherapistDirectory from "./pages/therapist";
import UserTherapySessions from "./pages/myTherapies";
import Chat from "./pages/message";
import Vcall from "./pages/videoCall";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TherapistLiveSessions from "./pages/therapist-dashboard";
import HomePage from "./pages/landing"

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/sessions" element={<TherapistDirectory />} />
          <Route path="/my-sessions" element={<UserTherapySessions />} />
          <Route path="/chat/to/:to_id" element={<Chat />} />
          <Route path="/videoCall" element={<Vcall />} />
          <Route path="/therapist-dashboard" element={<TherapistLiveSessions />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // or 'dark'
        />
      </>
    </Router>
  );
}

export default App;
