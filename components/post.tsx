import React from "react";
import { ProfileMetadata } from "./profile";
import { Card, User, Text, Spacer, Loading } from "@nextui-org/react";

interface PostMetadata {
  type: string,
  content: {
    content: string
    format: string
  }
}

function Post({
  data,
  profileData
}: {
  data: PostMetadata;
  profileData: ProfileMetadata;
}) {
  return (
    <>
      {(data && profileData) ? (
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <User
              src={profileData.avatar}
              name={profileData.name}
              size="md"
              bordered
              color="secondary"
            >
              <User.Link>@{profileData.username}</User.Link>
            </User>
            <Spacer y={0.5} />
            <Text css={{
              padding: "0 0.75rem",
            }}>{data.content.content}</Text>
          </Card.Body>
        </Card>
      ): <Loading size="md" />}
    </>
  );
}

export { Post, PostMetadata }