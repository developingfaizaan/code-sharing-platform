import { PostCard } from "../components";

const HomePage = () => {
  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
};

export default HomePage;
