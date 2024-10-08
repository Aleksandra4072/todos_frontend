import { Routes, Route } from "react-router-dom";
import PersistLogin from "./components/auth/PersistLogin";
import CustomLayout from "./components/auth/CustomLayout";
import RequireAuth from "./components/auth/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SpreadSheet from "./pages/SpreadSheet";
import CoordInput from "./pages/CoordInupt";
import Dot from "./pages/Dot";
import ChunkedTransfer from "./pages/ChunkedTransfer";
import ServersideChunks from "./pages/ServersideChunks";
import Calamine from "./pages/Calamine";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route path="/dot" element={<Dot />} />
        <Route path="/coord" element={<CoordInput />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/spread_sheet" element={<SpreadSheet />} />
        <Route path="/spread_sheet_chunked" element={<ChunkedTransfer />} />
        <Route  path="/server_side" element={<ServersideChunks />} />
        <Route  path="/calamine" element={<Calamine />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["USER", "ADMIN"]} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
