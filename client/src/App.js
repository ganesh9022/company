import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Applyleave from "./components/Applyleave";
import Payslip from "./components/Payslip";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Setting from "./components/Setting";
import Helpsupport from "./components/Helpsupport";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applyleave" element={<Applyleave />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/helpsupport" element={<Helpsupport />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
