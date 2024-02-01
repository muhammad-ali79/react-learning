import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../Appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  // this will get the post of the query of active
  appwriteService.getPosts().then((posts) => {
    if (posts) {
      // equaling the post to the posts that come from appWrite
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
