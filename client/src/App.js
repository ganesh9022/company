import React from "react";
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
import { Flex, Box } from "@radix-ui/themes";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Searchbar from "./components/Searchbar";
import "./App.css"

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

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
        <Flex>
          <Box className="w-1/6">
            <Navbar />
          </Box>
          <Box className="w-5/6">
            <Flex direction="column">
              <Box height="9">
                <Routes>
                  <Route
                    path="/dashboard"
                    element={
                      <div>
                        <Tabbar
                          name={
                            isSignedIn ? "Welcome, " + user.fullName + "!" : ""
                          }
                        />
                        <Searchbar />
                      </div>
                    }
                  />
                  <Route path="/applyleave" element={<Searchbar />} />
                  <Route path="/payslip" element={<Searchbar />} />
                  <Route path="/setting" element={<Searchbar />} />
                  <Route path="/notification" element={<Searchbar />} />
                  <Route path="/helpsupport" element={<Searchbar />} />
                </Routes>
              </Box>
              <Box className="h-screen">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/applyleave" element={<Applyleave />} />
                  <Route path="/payslip" element={<Payslip />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/myprofile" element={<Profile />} />
                  <Route path="/helpsupport" element={<Helpsupport />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </SignedIn>
    </BrowserRouter>
  );
}

export default App;
