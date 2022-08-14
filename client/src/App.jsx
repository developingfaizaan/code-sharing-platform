import { HomePage, CreatePage, PostPage } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <CreatePage />
      <PostPage />
    </>
  );
};

export default App;
