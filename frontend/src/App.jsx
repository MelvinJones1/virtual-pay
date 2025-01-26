import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signout from "./components/Signup";
import Send from "./components/Send";
import Dashboard from "./components/Dashboard";
import DashboardProvider from "./DashboardProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          element={
            <DashboardProvider>
              <Signin />
            </DashboardProvider>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <DashboardProvider>
              <Signout />{" "}
            </DashboardProvider>
          }
        ></Route>

        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/send" element={<Send />}></Route>
        <Route
          path="/dashboard"
          element={
            <DashboardProvider>
              <Dashboard />
            </DashboardProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
