import { useState, useEffect } from "react";

import { fetchSnippets } from "../api";
import { PostCard, Loader } from "../components";

const HomePage = () => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSnippets()
      .then(({ data }) => {
        setSnippets(data.snippets.reverse());
        setLoading(false);

      });
  }, []);

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      {loading && <Loader />}

      {!loading && !snippets.length && (
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
          No Snippets to show!
        </h1>
      )}

      {snippets && snippets.map((snippet) => ( <PostCard snippet={snippet} key={snippet._id} /> ))}
    </main>
  );
};

export default HomePage;
