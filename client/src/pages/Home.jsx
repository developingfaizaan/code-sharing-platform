import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchSnippets } from "../api";
import { PostCard, Loader } from "../components";

const HomePage = () => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await fetchSnippets();

      setSnippets(data.snippets.reverse());
      setLoading(false);
    })();
  }, []);

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      {loading && <Loader />}

      {loading === false && snippets.length === 0 && (
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
          No Snippets to show!
        </h1>
      )}

      {snippets &&
        snippets.map((snippet) => (
          <PostCard snippet={snippet} key={snippet._id} />
        ))}
    </main>
  );
};

export default HomePage;
