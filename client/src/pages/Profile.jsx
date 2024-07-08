import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import "./Profile.css";
import { QUERY_ME, QUERY_USER } from "../utils/queries";

function LoggedInUserProfile() {
  const { data } = useQuery(QUERY_ME);
  const MeProfile = data?.me;
  if (!MeProfile) {
    return <div className="Profile-Container">Loading:</div>;
  }
  console.log(MeProfile);

  const HandlePostClick = (Event) => {
    Event.currentTarget.classList.toggle("enlargedPost");
  };

  return (
    <div className="Profile-Container">
      <div className="My-Profile">
        <h1 className="Profile-Header"> Your Profile</h1>
        <p className="Profile-Info">Welcome, {MeProfile.username}!</p>
        <p className="Profile-Info">Email: {MeProfile.email}</p>
        <p className="Profile-Info">Joined: {MeProfile.createdAt}</p>
      </div>

      <div className="Profile-Post-Container">
        <h2 className="Profile-Post-Title">My Posts</h2>
        <ul className="Profile-Post-List">
          {MeProfile.posts.map((post) => (
            <li
              className="List Profile-Post-Item"
              key={post._id}
              onClick={HandlePostClick}
            >
              <p>Title:</p>
              <span className="Profile-Post-Title">{post.postTitle}</span>
              <p>Post:</p>
              <p className="Profile-Post-Content">{post.postText}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="Heading2 Comment-Container">My Comments</h2>
        <ul className="Unordered-List">{/* Comments Will Go Here */}</ul>
      </div>
    </div>
  );
}
// Promise.All happen at the same time (other promise to - all settled )**
function UserProfile({ id }) {
  const { data } = useQuery(QUERY_USER, { variables: { id } });
  const SearchedProfile = data?.user;
  if (!SearchedProfile) {
    return <div className="Profile-Container">Loading:</div>;
  }
  console.log(SearchedProfile);

  return (
    <div className="Profile-Container">
      <div className="My-Profile">
        <h1 className="Profile-Heading">Profile</h1>
        <p>{SearchedProfile.username}</p>
      </div>

      <div className="Post-Container">
        <h2 className="Profile-Heading2">My Posts</h2>
        <ul className="Profile-Unordered-List">
          {SearchedProfile.posts.map((post) => (
            <li className="Profile-Post-Title-Box" key={post._id}>
              {post.postTitle}
              <p className="Profile-Post-Text-Box">{post.postText} </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="Profile-Heading2 Profile-Comment-Container">
          My Comments
        </h2>
        <ul className="Profile-Unordered-List">
          {/* Comments Will Go Here */}
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  const { id } = useParams();
  if (id) {
    return <UserProfile id={id} />;
  } else {
    return <LoggedInUserProfile />;
  }
}

export default Profile;
