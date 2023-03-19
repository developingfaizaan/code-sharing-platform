import {Link} from 'react-router-dom'
import {Avatar} from './';

const Comment = ({comment}) => {
  const {name, email, _id: userId } = comment.postedBy;

  return (
    <div className='my-10'>
        <Link to={`/user/${userId}`} title="Profile Page">
            <Avatar name={name} email={email} />
        </Link>
        <blockquote className='mt-5 text-md pb-4 border-b border-black200'>{comment.body}</blockquote>
    </div>
  )
}

export default Comment