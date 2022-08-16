import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchSnippets } from "../api";
import { PostCard } from "../components";

const HomePage = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchSnippets();

      setSnippets(data.snippets.reverse());
    })();
  }, []);

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      {snippets.length === 0 && (
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
          No Snippets to show!
        </h1>
      )}

      {snippets &&
        snippets.map((snippet) => (
          <Link to={`/snippet/${snippet._id}`} key={snippet._id}>
            <PostCard snippet={snippet} />
          </Link>
        ))}
    </main>
  );
};

export default HomePage;
