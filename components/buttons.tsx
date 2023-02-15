import React from "react";
import { Button } from "@nextui-org/react";

interface FollowMetadata {
  following: boolean;
  follow: () => Promise<any | void>;
  unfollow: () => Promise<any | void>;
}

function FollowButton({
  data
}: {
  data: FollowMetadata;
}) {
  return (
    <Button
      auto
      rounded
      bordered={data.following}
      onClick={() => data.following ? data.unfollow() : data.follow()}
    >
      {!data.following ? "Follow" : "Unfollow"}
    </Button>
  );
}

export { FollowButton, FollowMetadata };