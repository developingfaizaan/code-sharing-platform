import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/auth";
import { HomePage, CreatePage, PostPage, ProfilePage, Signup, Login } from "./pages";
import { Navbar, ProtectedRoute } from "./components";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
        <Route path="/snippet/:id" element={<PostPage />} />
        <Route path="/user/:id" element={<ProfilePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
