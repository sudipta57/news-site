import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import FullNews from "./pages/FullNews";
import Newspage from "./pages/Newspage";
import AdminHome from "./adminpages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import OtpVerify from "./pages/OtpVerify";
import StickyIcons from "./components/StrickyIcons";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Show StickyIcons only on homepage and full-news page
  const showStickyIcons =
    location.pathname === "/" || location.pathname === "/full-news";

  return (
    <>
      {showStickyIcons && <StickyIcons />}
      <Routes>
        <Route path="/" element={<Newspage />} />
        <Route path="/full-news" element={<FullNews />} />
        {/* routes for admin */}
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-forgot-password"
          element={<AdminForgotPassword />}
        />
        <Route path="/admin-otp-verify" element={<OtpVerify />} />
      </Routes>
    </>
  );
}

export default App;
