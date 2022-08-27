import { Link, useNavigate, useLocation } from "react-router-dom";

import { deleteSnippet } from "../api";
import { copyToClipboard } from "../utils";
import { useAuth } from "../context/auth";
import { Avatar, Code } from "./";

import { copy, edit, remove } from '../assets'

const URL = "https://code-sharing-platform.vercel.app";

const PostCard = ({ snippet }) => {
  const { _id: snippetId, title, description, code, language, postedBy: { name, email, _id: userId } } = snippet;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const deleteConfirmation = window.confirm("Are you sure, you want to delete this snippet?");

    if (!deleteConfirmation) return;

    try {
      await deleteSnippet(snippetId);

      navigate("/");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const handleEdit = () => navigate("/create", { state: snippet });

  return (
    <article className="mb-16 border-b pb-10 border-black200">
      <header className="flex justify-between items-center">
        <Link to={`/user/${userId}`} title="Profile Page">
          <Avatar name={name} email={email} />
        </Link>

        <div className="flex gap-5 sm:gap-8 text-white700">
          <button className="hidden sm:flex items-center gap-1" title="Share Snippet" onClick={() => copyToClipboard(`${URL}/snippet/${snippetId}`)} >
            <img src={copy} alt="copy" />
          </button>

          {userId === user?.user?.id && (location.pathname.startsWith("/user") || location.pathname.startsWith("/snippet")) ? (
            <>
              <button className="sm:flex items-center gap-1" title="Edit Snippet" onClick={handleEdit} >
                <img src={edit} alt="edit" />
              </button>

              <button className="sm:flex items-center gap-1" title="Delete Snippet" onClick={handleDelete} >
                <img src={remove} alt="delete" />
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </header>

      <Link to={`/snippet/${snippetId}`}>
        <h3 className="text-xl mt-10 mb-3 font-medium">{title}</h3>
        <p className="mb-8 text-white700">{description}</p>
        <Code language={language} code={code} />
      </Link>
    </article>
  );
};

export default PostCard;
