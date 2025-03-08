
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./route/PrivateRoute";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;