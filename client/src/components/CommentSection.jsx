import {useState} from 'react';
import { Textarea, Comment, Button} from "./";
import { commentSnippet } from "../api";

const CommentSection = ({ snippetId, postedComments, setCommentAdded }) => {
  const [comment, setComment] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const { data } = await commentSnippet(snippetId, {comment});

      setComment("");

      if (data.error) return console.log(data.message);

      // setCommentAdded to re-render the post component -> it's a dependency in the useEffect hook.
      setCommentAdded(prev => !prev);

      } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <>
      <form className='mt-14 mb-20 border-t pt-6 border-black200'>
        <Textarea name="comment" label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
        <Button onClick={handleClick}>Post Comment</Button>
      </form>

      {postedComments && postedComments.slice(0).reverse().map((cm, i) => (
        <Comment comment={cm} key={i} />
      ))}
    </>
       
  )
}

export default CommentSection;