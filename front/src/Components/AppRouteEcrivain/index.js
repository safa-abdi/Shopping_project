import { BrowserRouter, Route, Routes } from "react-router-dom";
import Livres from "../../Pages/livres";
import DashEcrivain from "../../dashEcrivain";
import Achat from "../../achat";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashEcrivain />}></Route>
      <Route path="/livre" element={<Livres />}></Route>
      <Route path="/achat" element={<Achat />}></Route>
    </Routes>
  );
}
export default AppRoutes;
