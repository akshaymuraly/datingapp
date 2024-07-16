import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import UserLanding from "./pages/UserLanding";
// import LeftMenuBarMatchedBody from "./components/common/user/LeftMenuBarMatchedBody";
// import LeftMenuBarMessagesBody from "./components/common/user/LeftMenuBarMessagesBody";
// import RightWindow from "./components/layout/RightWindow";
// import ChatWindow from "./components/common/user/ChatWindow";
// import UserProfile from "./components/common/user/Profile";
// import UserDetails from "./components/common/user/UserDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLandingPage from "./pages/admin/AdminLandingPage";
import PrivateRoute from "./pages/PrivateRoute";

import UserGrid from "./components/layout/userGrid/UserGrid";
import UserProfileBody from "./components/layout/userGrid/UserProfileBody";
import UserChatBody from "./components/layout/userGrid/chat/UserChatBody";
import UserChatDefault from "./components/layout/userGrid/chat/UserChatDefault";
import UserMessageWindow from "./components/layout/userGrid/chat/UserMessageWindow";
import UserDetailedProfile from "./components/layout/userGrid/UserDetailedProfile";
import UserSignup from "./pages/UserSignup";
import Lander from "./pages/Lander";
import UserReportsPage from "./pages/UserReportsPage";





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/lander" element={<Lander/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/userlanding" element={<UserLanding/>}>
            <Route index element={<UserGrid/>}/>
            <Route path="profile" element={<UserProfileBody/>}/>
            <Route path="userdetails/:userId" element={<UserDetailedProfile/> }/>
            <Route path="reports" element={<UserReportsPage/>}/>
            <Route path="chat" element={<UserChatBody/>}>
                <Route index element={<UserChatDefault/>}/>
                <Route path=":userId" element={<UserMessageWindow/>}/>
            </Route>
            {/* <Route path="user/chat/:chatid" element={<ChatWindow/>}/>
            <Route path="profile" element={<UserProfile/>}/>
            <Route path="user/:userid" element={<UserDetails/>}/> */}
          </Route>
        </Route>

        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/landing" element={<AdminLandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App