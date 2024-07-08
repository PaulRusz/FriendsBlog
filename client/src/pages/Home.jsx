import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="Home-Container">
        <h1 className="Home-Title">
          Connect, Share, and Communicate With
          <br></br>
          <div className="FriendsBlog">The FriendsBlog</div>
        </h1>
        <div className="App-Overview">
          <p>
            Welcome to our social media platform, where connecting with friends
            and sharing thoughts has never been easier! FriendsBlog is designed
            to bring people closer together, offering a seamless and engaging
            experience that keeps you in touch with the people who matter most.
          </p>
        </div>
        <h2 className="Home-Subtitle">Why FriendsBlog?</h2>
        <div className="Key-Feature">
          <h3 className="App-Feature-Heading">Stay Connected</h3>
          <p>
            Effortlessly keep up with your friends and loved ones. Whether you
            want to share a quick update, a photo from your latest adventure, or
            a heartfelt message, FriendsBlog makes it simple to stay in touch.
          </p>
        </div>
        <div className="Key-Feature">
          <h3 className="App-Feature-Heading">Share Your World</h3>
          <p>
            Express yourself with posts, photos, and stories. Let your friends
            see what you&apos;re up to, what you&apos;re passionate about, and
            what makes you unique. The intuitive interface allows you to share
            your thoughts and moments with ease.
          </p>
        </div>
        <div className="Key-Feature">
          <h3 className="App-Feature-Heading">Follow and Engage</h3>
          <p>
            Discover what your friends are sharing and join the conversation.
            Like, comment, and share posts to show your interests and keep those
            in your life involved in what you&apos;re up to. Stay updated with
            your friends&apos; lives and engage in meaningful interactions.
          </p>
        </div>
        <div className="Key-Feature">
          <h3 className="App-Feature-Heading">Private and Secure</h3>
          <p>
            Your privacy is our top priority. We provide robust security
            features to ensure that your personal information and shared content
            are protected. Control who sees your posts and manage your privacy
            settings wit ease.
          </p>
        </div>
        <div className="Call-To-Action-Div">
          <h2 className="Home-Subtitle">Join Today!</h2>
          <p>
            Join our community today and experience the joy of staying connected
            with friends, sharing your moments, and engaging in meaningful
            conversations. Create an account now and start your journey of
            connection and communication.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
