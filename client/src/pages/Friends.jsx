import { useLazyQuery, useQuery } from "@apollo/client";

import "./Friends.css";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
import FriendBtn from "../components/FriendButton/Index";

const FriendsPage = () => {
  const MeQuery = useQuery(QUERY_ME);
  const [SearchUsers, FriendQuery] = useLazyQuery(QUERY_USERS);
  const SearchedUser = MeQuery.data?.me;
  const Friends = FriendQuery.data?.users.filter(
    (Friend) => Friend._id !== SearchedUser?._id
  );

  const HandleSearch = async (Event) => {
    Event.preventDefault();
    const formData = new FormData(Event.target);
    const Username = formData.get("username");
    try {
      await SearchUsers({
        variables: { username: Username },
      });
    } catch (Error) {
      console.error("Error Searching For Friends:", Error);
    }
  };

  return (
    <div className="Friends-Search-Container">
      <div className="Friends-Page-Div">
        <h1 className="Friends-Page-Header">Friends Page</h1>
      </div>
      <br></br>
      <form
        onSubmit={HandleSearch}
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="Search for Friends"
          name="username"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            flex: 1,
          }}
        />
        <button
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Render The `SearchFriends` Component */}
      <div className="Search-Friends-Container">
        {SearchedUser &&
          Friends?.map((SearchFriend) => (
            <div
              className="Friend-Container-Div Friend-Item"
              key={SearchFriend._id}
            >
              <p>Username:</p>
              <a
                href={`/profile/${SearchFriend._id}`}
                className="Friends-Username-Display"
              >
                {SearchFriend.username}
              </a>
              <FriendBtn
                id={SearchFriend._id}
                isFriend={SearchedUser.friends.some(
                  (Friend) => Friend._id === SearchFriend._id
                )}
                className="Friend-Button"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FriendsPage;
