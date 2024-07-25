import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import SignupPage from './pages/SignupPage';
import CustomLayout from "./components/router/CustomLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
