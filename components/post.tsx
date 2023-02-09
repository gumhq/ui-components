import React, { useState, useEffect } from "react";
import { Card, User, Text, Spacer, Loading } from "@nextui-org/react";
import { ProfileInt } from "./profile";

export interface TextPostInt {
  type: string,
  content: {
    content: string
    format: string
  }
}

function Post({
  postURI,
  profileURI
}: {
  postURI: string;
  profileURI: string;
}) {
  const [post, setPost] = useState<TextPostInt>();
  const [profile, setProfile] = useState<ProfileInt>();

  useEffect(() => {
    (async function () {
      if (!profileURI || profile) return;
      const res = await fetch(profileURI);
      const data = await res.json();
      setProfile(data);
    })();
    (async function () {
      if (!postURI || post) return;
      const res = await fetch(postURI);
      const data = await res.json();
      setPost(data);
    })();
  }, [profileURI, postURI]);

  return (
    <>
      {(post && profile) ? (
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <User
              src={profile.avatar}
              name={profile.name}
              size="md"
              bordered
              color="secondary"
            >
              <User.Link>@{profile.username}</User.Link>
            </User>
            <Spacer y={0.5} />
            <Text css={{
              padding: "0 0.75rem",
            }}>{post.content.content}</Text>
          </Card.Body>
        </Card>
      ): <Loading size="md" />}
    </>
  );
}

export { Post }