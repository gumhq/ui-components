# Gum UI Components

This is a collection of UI components for Gum. This package requires you to already have installed next-ui in your app. [Install Next-UI](https://nextui.org/docs/guide/getting-started)


![Example](https://jc6qaozbaz24hohddrzkrpggseylt5v7bxixeyxfjsbjhv43lkua.arweave.net/SL0AOyEGdcO44xxyqLzGkTC59r8N0XJi5UyCk9ebWqg)


### Profile

```tsx
import { Profile, ProfileMetadata } from '@gumhq/ui-components';

function Main() {
  const profile: ProfileMetadata = {
    name: "Kunal Bagaria",
    bio: "Software Engineer @ Gum",
    username: "kunal",
    following: 5,
    followers: 500,
    avatar: "https://i.imgur.com/uGv5Zca.jpg"
  }
  return (
    <Profile data={profile} />
  );
}

```

### Post

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