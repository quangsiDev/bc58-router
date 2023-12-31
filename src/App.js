import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import HookPage from "./pages/HookPage/HookPage";
import ShoeShop from "./pages/ShoeShop/ShoeShop";
import UseEffect from "./pages/UseEffect/UseEffect";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import UserManagement from "./pages/UserManagement/UserManagement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* page  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
          <Route path="/hook-page" element={<HookPage />} />

          <Route path="/shoe-shop" element={<ShoeShop />} />

          <Route path="/use-effect" element={<UseEffect />} />
          {/* detail */}
          <Route path="/detail/:idPhim" element={<DetailMovie />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 1 page : url ,component
