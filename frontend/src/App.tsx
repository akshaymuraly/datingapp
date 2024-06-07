import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
  )
}

export default App