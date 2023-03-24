import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64";


import { Error, PostCard, Button } from "../components";
import { profileSnippets, updateProfilePhoto  } from "../api";
import { nameInitialsGenerator } from "../utils";
import { useAuth } from "../context/auth";
import { edit as editIcon } from "../assets";

const ProfilePage = () => {
  const { id } = useParams();
  const { user: currentUser} = useAuth();
  const [snippets, setSnippets] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [editError, setEditError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    profileSnippets(id)
      .then(({ data }) => {
        setUser(data.user);

        if (!data.snippets) return setError(data.message);
        
        if (data.snippets.length === 0) return setError("No snippet posted by this user");

        setSnippets(data.snippets.reverse());
      })
      .catch((error) => setError(error.response.data.message))
  }, [id]);

  const handleProfileChange = async () => {
    const { data: { newUser } } = await updateProfilePhoto(id, { profilePhoto: image });
    
    setEdit(false);

    if(!newUser) return setEditError(true);

    setUser({...user, profilePhoto: newUser.profilePhoto });
  };


  if (!id) return <h1>No user with that ID</h1>;

  return (
    <main className={`w-full max-w-4xl my-20 mx-auto px-5 md:px-12 sm:px-32`}>
      {user && (
        <figure className="flex flex-col items-center gap-2">
          <div className="inline-flex relative justify-center items-center w-36 h-36 bg-primary rounded-full">
             {user.profilePhoto ? (
              <div>
                <img className="rounded-full object-cover h-36 w-36" src={user.profilePhoto} alt="Profile" />
              </div>
            ) : (
              <span className="font-medium text-white text-4xl">{nameInitialsGenerator(user.name)}</span>
            )}

            { user._id === currentUser?.user?.id && 
              <img onClick={() => {setEdit((prev) => !prev); setEditError(false)}} className="absolute top-0 right-0 cursor-pointer" src={editIcon} title="Edit Profile Photo" alt="Edit Profile" />
            }
          </div>

          {editError && <p className="text-center text-red-400">Profile photo not changed! <br /> Please try again later or try a smaller size photo.</p>}


          { edit && (
            <>
              <FileBase type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} />
              <Button onClick={handleProfileChange} styles="w-2/4">Update Photo</Button>
            </>
          )}

          <div className="flex flex-col items-center mb-24">
            <span className="text-xl my-1">{user.name}</span>
            <small className="text-white700 text-lg">{user.email}</small>
          </div>
        </figure>
      )}

      {error && <Error message={error} />}

      {snippets && snippets.map((snippet) => <PostCard snippet={snippet} key={snippet._id} />)}
    </main>
  );
};

export default ProfilePage;
