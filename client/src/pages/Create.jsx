import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Input, Button, Textarea, Error } from "../components";
import { createSnippet, updateSnippet } from "../api";

const initialValues = {
  title: "",
  description: "",
  language: "",
  tags: "",
  code: "",
  postedBy: JSON.parse(localStorage.getItem("auth")).user.id,
};

const CreatePage = ({ formValues = initialValues }) => {
  const [snippet, setSnippet] = useState(formValues);
  const [error, setError] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setisUpdating(true);

      const { title, description, language, tags, code } = location.state;
      setSnippet({
        title,
        description,
        language,
        tags,
        code,
        postedBy: JSON.parse(localStorage.getItem("auth")).user.id,
      });
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdating) {
        const { data } = await updateSnippet(location.state._id, snippet);

        if (data.error) {
          return setError(data.message);
        }
      } else {
        const { data } = await createSnippet(snippet);
        if (data.error) {
          return setError(data.message);
        }
      }

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
        Share code snippets in seconds.
      </h1>
      {error && <Error message={error} />}

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
          placeholder="File Extension eg: .html .css .js"
          value={snippet.language}
          onChange={(e) => setSnippet({ ...snippet, language: e.target.value })}
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
        <Button type="submit">
          {isUpdating ? "Update the Snippet" : "Create a Snippet"}
        </Button>
      </form>
    </main>
  );
};

export default CreatePage;
