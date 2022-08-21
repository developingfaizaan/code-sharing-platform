import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button, PostCard } from "../components";
import { profileSnippets } from "../api";
import { nameInitialsGenerator } from "../utils";

const ProfilePage = () => {
  const { id } = useParams();
  const [snippets, setSnippets] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await profileSnippets(id);

        setUser(data.user);

        if (!data.snippets) return setError(data.message);
        if (data.snippets.length === 0)
          return setError("No snippet posted by this user");

        setSnippets(data.snippets.reverse());
      } catch (error) {
        setError(error.response.data.message);
      }
    })();
  }, [id]);

  if (!id) {
    return <h1>No User with that id</h1>;
  }

  return (
    <main className={`w-full max-w-4xl my-20 mx-auto px-5 md:px-12 sm:px-32`}>
      {user && (
        <figure className="flex flex-col items-center gap-2">
          <div className="inline-flex overflow-hidden relative justify-center items-center w-36 h-36 bg-primary rounded-full">
            <span className="font-medium text-white text-5xl">
              {nameInitialsGenerator(user.name)}
            </span>
          </div>

          <div className="flex flex-col items-center mb-24">
            <span className="text-xl my-1">{user.name}</span>
            <small className="text-white700 text-lg">{user.email}</small>
          </div>
        </figure>
      )}

      {error && (
        <>
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
            {error}
          </h1>
          <Link to="/">
            <Button>Go to Home Page</Button>
          </Link>
        </>
      )}

      {snippets &&
        snippets.map((snippet) => (
          <PostCard snippet={snippet} key={snippet._id} />
        ))}
    </main>
  );
};

export default ProfilePage;
