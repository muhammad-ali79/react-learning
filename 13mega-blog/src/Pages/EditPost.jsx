import React, { useEffect, useState } from "react";
import { Container, Postform } from "../components";
import appwriteService from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  // url will change after the post is edited so we get the postid(slug) from the url using useParams
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
