import React, { useState, useEffect } from "react";
import { Card, User, Spacer, Text, Container, Row, Button, Loading } from "@nextui-org/react";

export interface ProfileInt {
  name: string;
  bio: string;
  username: string;
  following: number;
  followers: number;
  avatar: string;
}

function Profile({
  profileURI
}: {
  profileURI: string;
}) {
  const [profile, setProfile] = useState<ProfileInt>();

  useEffect(() => {
    (async function () {
      if (!profileURI) return;
      const res = await fetch(profileURI);
      const data = await res.json();
      setProfile(data);
    })();
  }, [profileURI]);

  return (
    <>
      {!profile ? <Loading size="md" /> : (
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <Container css={{ padding: "0rem", paddingRight: "0.75rem" }}>
              <Row justify="space-between">
                <User
                  src={profile?.avatar}
                  name={profile?.name}
                  bordered
                  color="secondary"
                >
                  <User.Link>@{profile?.username}</User.Link>
                </User>
                <Button auto rounded>Follow</Button>
              </Row>
            </Container>
            <Spacer y={0.5} />
            <Container css={{ padding: "0 0.75rem" }}>
              <Text>{"Full-stack developer, @gumhq lover she/her 🎉"}</Text>
              <Spacer y={0.5} />
              <Row>
                <Text color="gray" weight="medium" size="$sm">{profile?.following} {"Following"}</Text>
                <Spacer x={0.5} />
                <Text color="gray" weight="medium" size="$sm">{profile?.followers} {"Followers"}</Text>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export { Profile }