# Gum UI Components

This is a collection of UI components for Gum. It is built using Next-UI.


![Example](https://jc6qaozbaz24hohddrzkrpggseylt5v7bxixeyxfjsbjhv43lkua.arweave.net/SL0AOyEGdcO44xxyqLzGkTC59r8N0XJi5UyCk9ebWqg)


## Installation

```
npm install @gumhq/ui-components
```
or
```
yarn add @gumhq/ui-components
```


## Setup

For the components to work correctly, you need to set up the GumUIProvider at the root of your application. You can import the provider from `@gumhq/ui-components`.

```tsx
import { GumUIProvider } from '@gumhq/ui-components';
```

Please follow the instructions to setup the provider [here](https://nextui.org/docs/guide/getting-started#setup)


### Follow Button

This component allows you to render a follow button. It takes in the following data structure as props.

```tsx
import { FollowButton } from '@gumhq/ui-components';
import { useState } from 'react';

function Main() {
  const [following, setFollowing] = useState(false);

  const followData = {
    following: following,
    follow: async () => setFollowing(true),
    unfollow: async () => setFollowing(false),
  }

  return (
    <FollowButton data={followData} />
  )
}
```


### Profile

This component allows you to render a profile. It takes in the following data structure as props.

```tsx
import { Profile, ProfileMetadata } from '@gumhq/ui-components';

function Main() {
  const followData = {...};
  const profile: ProfileMetadata = {
    name: "Kunal Bagaria",
    bio: "Software Engineer @ Gum",
    username: "kunal",
    following: 5,
    followers: 500,
    avatar: "https://i.imgur.com/uGv5Zca.jpg",
    connect: followData // Optional
  }
  return (
    <Profile data={profile} />
  );
}

```

### Post

This component allows you to render a post. It takes in the post and profile data as props.

```tsx
import { Post, PostMetadata, ProfileMetadata } from '@gumhq/ui-components';

function Main() {
  const profile: ProfileMetadata = {...}
  const post: PostMetadata = {
    type: "text",
    content: {
      format: "markdown",
      content: "Hello World"
    }
  }
  return (
    <Post
      profileData={profile}
      data={post}
    />
  );
}
```

### Feed

This component allows you to render a feed of posts. It takes in an array of objects which includes the post and profile data.

```tsx
import { Feed, PostMetadata, ProfileMetadata } from '@gumhq/ui-components';

function Main() {
  const profileData: ProfileMetadata = {...};
  const postData: PostMetadata = {...};
  const feed = {
    { post: postData, profile: profileData },
    { post: postData, profile: profileData },
    { post: postData, profile: profileData },
  };
  return (
    <Feed posts={feed} skip={0} show={feed.length} gap={0.5} />
  );
}
```

### Icon Buttons

We have a few Material-UI icon buttons that you can use in your application.

```tsx
import { ReplyButton, LikeButton } from '@gumhq/ui-components';

function Main() {
  const likeData = {
    liked: false,
    like: async () => console.log('Like'),
    unlike: async () => console.log('Unlike'),
  };
  return (
    <div>
      <ReplyButton onClick={() => console.log('Handle Reply Button Click')} />
      <LikeButton data={likeData} />
    </div>
  );
}
```