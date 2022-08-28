import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
