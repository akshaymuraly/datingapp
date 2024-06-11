import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import UserLanding from "./pages/UserLanding";
import LeftMenuBarMatchedBody from "./components/common/user/LeftMenuBarMatchedBody";
import LeftMenuBarMessagesBody from "./components/common/user/LeftMenuBarMessagesBody";
import RightWindow from "./components/layout/RightWindow";
import ChatWindow from "./components/common/user/ChatWindow";
import UserProfile from "./components/common/user/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/userlanding" element={<UserLanding/>}>
          <Route path="user/chat/:chatid" element={<ChatWindow/>}/>
          <Route path="profile" element={<UserProfile/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App