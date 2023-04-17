import { Routes, Route } from "react-router-dom";

import NewTag from "../Pages/NewTag";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Profile from "../Pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newTags" element={<NewTag />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
