import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, CreatePage, PostPage, Signup, Login } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/snippet/:id" element={<PostPage />} />
          {/* AUTH */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
