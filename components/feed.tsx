import React from "react";
import { Spacer } from "@nextui-org/react";
import { ProfileMetadata } from "./profile";
import { Post, PostMetadata } from "./post";

interface FeedMetadata {
  posts: {
    post: PostMetadata,
    profile: ProfileMetadata,
  }[];
  skip: number,
  show: number,
  gap: number,
}

function Feed({ posts, skip, show, gap }: FeedMetadata) {
  return (
    <>
      {posts.slice(skip, skip + show).map((p) => (
        <div>
          <Post data={p.post} profileData={p.profile} />
          <Spacer y={gap} />
        </div>
      ))}
    </>
  );
}

export { Feed, FeedMetadata }