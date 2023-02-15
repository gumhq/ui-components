import React from "react";
import { Card, User, Spacer, Text, Container, Row, Button, Loading } from "@nextui-org/react";

interface ProfileMetadata {
  name: string;
  bio: string;
  username: string;
  following: number;
  followers: number;
  avatar: string;
  connect?: {
    following: boolean;
    follow: () => Promise<any | void>;
    unfollow: () => Promise<any | void>;
  }
}

function Profile({
  data
}: {
  data: ProfileMetadata;
}) {

  function handleFollow() {
    data?.connect?.follow();
  }

  function handleUnfollow() {
    data?.connect?.unfollow();
  }

  return (
    <>
      {!data ? <Loading size="md" /> : (
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <Container css={{ padding: "0rem", paddingRight: "0.75rem" }}>
              <Row justify="space-between">
                <User
                  src={data.avatar}
                  name={data.name}
                  bordered
                  color="secondary"
                >
                  <User.Link>@{data.username}</User.Link>
                </User>
                {data.connect && (
                  <Button
                    auto
                    rounded
                    bordered={data.connect.following}
                    onClick={() => data.connect?.following ? handleUnfollow() : handleFollow()}
                  >
                    {!data.connect?.following ? "Follow" : "Unfollow"}
                  </Button>
                )}
              </Row>
            </Container>
            <Spacer y={0.5} />
            <Container css={{ padding: "0 0.75rem" }}>
              <Text>{data.bio}</Text>
              <Spacer y={0.5} />
              <Row>
                <Text color="gray" weight="medium" size="$sm">{data.following} {"Following"}</Text>
                <Spacer x={0.5} />
                <Text color="gray" weight="medium" size="$sm">{data.followers} {"Followers"}</Text>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export { Profile, ProfileMetadata }