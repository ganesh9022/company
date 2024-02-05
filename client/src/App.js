import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaveBalanceCard from "./components/LeavesBalanceCart";
import UpcommingHolidaysCart from "./components/UpcommingHolidaysCart";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Applyleaves from "./components/Applyleaves";
import Payslip from "./components/Payslip";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Notification from "./components/Notification";
import Setting from "./components/Setting";
import Helpsupport from "./components/Helpsupport";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Applyleaves" element={<Applyleaves />} />
        <Route path="/Payslip" element={<Payslip />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Helpsupport" element={<Helpsupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
