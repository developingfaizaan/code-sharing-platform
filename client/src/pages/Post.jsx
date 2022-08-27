import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchSnippet } from "../api";
import { Button, Error, PostCard } from "../components";
import { copyToClipboard, downloadFile, rawCodeFile } from "../utils";

const PostPage = () => {
  const [snippet, setSnippet] = useState(null);
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchSnippet(id)
      .then(({ data }) => {
        if (!data.snippet) return setError(data.message);

        setSnippet(data.snippet);
      })
      .catch((error) => setError(error.response.data.message));
  }, [id]);

  if (!id) return <h1>No Snippet Available</h1>

  return (
    <main className={`w-full max-w-4xl my-20 mx-auto px-5 md:px-12 sm:px-32`}>
      {error && <Error message={error} />}

      {snippet && (
        <>
          <PostCard snippet={snippet} />
          <aside className="flex flex-col md:flex-row sm:items-center justify-between">
            <div className="mb-5 md:mb-0 mt-1 w-100 md:w-96 flex rounded-md border border-black300">
              <span className="inline-flex items-center py-3 px-5 rounded-l-md bg-black200 text-white700 whitespace-nowrap">
                Raw Code
              </span>
              <p
                onClick={() => rawCodeFile(snippet.code, snippet.title)}
                className="py-3 px-5 truncate bg-black100 text-sky-400 flex-1 cursor-pointer"
              >
                Click to view the Code
              </p>

              <button
                onClick={() => rawCodeFile(snippet.code, snippet.title)}
                className="inline-flex justify-center items-center py-3 px-5 bg-black200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                styles="bg-black200 hover:bg-black300 focus:outline-black300"
                onClick={() => copyToClipboard(snippet.code)}
              >
                <div className="flex items-center gap-1 justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6665 3.33332V13.3333C6.6665 13.7754 6.8421 14.1993 7.15466 14.5118C7.46722 14.8244 7.89114 15 8.33317 15H14.9998C15.4419 15 15.8658 14.8244 16.1783 14.5118C16.4909 14.1993 16.6665 13.7754 16.6665 13.3333V6.03499C16.6665 5.81296 16.6221 5.59317 16.5359 5.38853C16.4498 5.18389 16.3236 4.99852 16.1648 4.84332L13.4023 2.14166C13.091 1.8372 12.6728 1.66671 12.2373 1.66666H8.33317C7.89114 1.66666 7.46722 1.84225 7.15466 2.15481C6.8421 2.46737 6.6665 2.8913 6.6665 3.33332V3.33332Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 15V16.6666C13.3333 17.1087 13.1577 17.5326 12.8451 17.8452C12.5325 18.1577 12.1086 18.3333 11.6666 18.3333H4.99992C4.55789 18.3333 4.13397 18.1577 3.82141 17.8452C3.50885 17.5326 3.33325 17.1087 3.33325 16.6666V7.49998C3.33325 7.05795 3.50885 6.63403 3.82141 6.32147C4.13397 6.00891 4.55789 5.83331 4.99992 5.83331H6.66659"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="w-max">Copy Code</span>
                </div>
              </Button>
              <Button
                onClick={() =>
                  downloadFile(snippet.code, snippet.language, snippet.tilte)
                }
              >
                <div className="flex items-center gap-1 justify-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 11.5V1.5M10.0001 11.5L6.66675 8.16667M10.0001 11.5L13.3334 8.16667M1.66675 13.1667L2.18425 15.2375C2.27438 15.5981 2.48243 15.9182 2.77536 16.1469C3.06828 16.3757 3.42926 16.4999 3.80091 16.5H16.1992C16.5709 16.4999 16.9319 16.3757 17.2248 16.1469C17.5177 15.9182 17.7258 15.5981 17.8159 15.2375L18.3334 13.1667"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="w-max">Download</span>
                </div>
              </Button>
            </div>
          </aside>
        </>
      )}
    </main>
  );
};

export default PostPage;
