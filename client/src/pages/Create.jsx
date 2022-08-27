import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Input, Button, Textarea, Error } from "../components";
import { createSnippet, updateSnippet } from "../api";

const CreatePage = () => {
  const [snippet, setSnippet] = useState({ title: "", description: "", language: "", tags: "", code: "", postedBy: JSON.parse(localStorage.getItem("auth")).user.id });
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setIsUpdating(true);

      const { title, description, language, tags, code } = location.state;

      setSnippet({ title, description, language, tags, code, postedBy: JSON.parse(localStorage.getItem("auth")).user.id });
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdating) {
        const { data } = await updateSnippet(location.state._id, snippet);

        if (data.error) return setError(data.message);
      } else {
        const { data } = await createSnippet(snippet);

        if (data.error) return setError(data.message);
      }

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleChange = ({ target: { name, value }}) => setSnippet({ ...snippet, [name]: value });

  return (
    <main className={`w-full max-w-4xl m-auto px-5 md:px-12 sm:px-32 py-20`}>
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-14">
        Share code snippets in seconds.
      </h1>

      {error && <Error message={error} isAlert />}

      <form onSubmit={handleSubmit}>
        <Input name="title" label="Title" type="text" value={snippet.title} onChange={handleChange} />
        <Input name="description" label="Description" type="text" value={snippet.description} onChange={handleChange} />
        <Input name="language" label="Language" type="text" placeholder="File Extension eg: .html .css .js" value={snippet.language} onChange={handleChange} />
        <Input name="tags" label="Tags" type="text" placeholder="Separated by comma eg: html, css, js" value={snippet.tags} onChange={handleChange} />
        <Textarea name="code" label="Your Code Snippet" type="text" value={snippet.code} onChange={handleChange} />
        <Button type="submit">{isUpdating ? "Update the Snippet" : "Create a Snippet"}</Button>
      </form>
    </main>
  );
};

export default CreatePage;
