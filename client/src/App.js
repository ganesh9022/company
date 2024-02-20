import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Applyleave from "./components/Applyleave";
import Payslip from "./components/Payslip";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Setting from "./components/Setting";
import Helpsupport from "./components/Helpsupport";
import PageNotFound from "./components/errors/401Error";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
function App() {
  return (
    <BrowserRouter>
      <SignedOut>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applyleave" element={<Applyleave />} />
          <Route path="/payslip" element={<Payslip />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/helpsupport" element={<Helpsupport />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SignedIn>
    </BrowserRouter>
  );
}
export default App;
