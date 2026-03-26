import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);

  const loadData = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Fake Posts</h2>
      <button onClick={loadData}>Refresh</button>

      {posts.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;