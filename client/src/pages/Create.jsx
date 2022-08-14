import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Textarea } from "../components";
import { createSnippet } from "../api";

const CreatePage = () => {
  const [snippet, setSnippet] = useState({
    title: "",
    description: "",
    language: "",
    tags: [],
    code: "",
    postedBy: "62f68b6e661612f78d4e9bc9",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tags [string to array]
    // setSnippet({ ...snippet, tags: snippet.tags.split(",") });

    try {
      const { data } = await createSnippet(snippet);

      if (data.error) {
        console.log(data.message);
        return setError(data.message);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
          Share code snippets in seconds.
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            type="text"
            value={snippet.title}
            onChange={(e) => setSnippet({ ...snippet, title: e.target.value })}
          />
          <Input
            label="Description"
            type="text"
            value={snippet.description}
            onChange={(e) =>
              setSnippet({ ...snippet, description: e.target.value })
            }
          />
          <Input
            label="Language"
            type="text"
            value={snippet.language}
            onChange={(e) =>
              setSnippet({ ...snippet, language: e.target.value })
            }
          />
          <Input
            label="Tags"
            type="text"
            placeholder="Seprated by comma eg: html, css, js"
            value={snippet.tags}
            onChange={(e) => setSnippet({ ...snippet, tags: e.target.value })}
          />
          <Textarea
            label="Your Code Snippet"
            type="text"
            value={snippet.code}
            onChange={(e) => setSnippet({ ...snippet, code: e.target.value })}
          />
          <Button type="submit">Create a Snippet</Button>
        </form>
      </main>
    </>
  );
};

export default CreatePage;
