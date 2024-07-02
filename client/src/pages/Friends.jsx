import react from "react";
import { useState, useEffect } from "react";
import "../styles/Friends.css";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   const retrieveFriends = async () => {
  //     try {
  //       // ADD API Endpoint
  //       const response = await fetch(
  //         "API_ENDPOINT_HERE hhtps://api/example.com"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setFriends(data);
  //     } catch (error) {
  //       console.error("Error fetching friends:", error);
  //     }
  //   };

  //   retrieveFriends();
  // }, []);

  console.log("this is friends array ==> ", friends)

  return (
    <div>
      <div className="header2">
        <h1>Friends Page</h1>
      </div>

      <div className="container">
        {friends.map((friend) => (
          <div key={friend.id}>
            <img src={friend.profilePic} alt={friend.name} />
            <a href={`/profile/${friend.username}`}>{friend.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
