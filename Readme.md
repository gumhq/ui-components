# Gum UI Components

This is a collection of UI components for Gum. This package requires you to already have installed next-ui in your app. [Install Next-UI](https://nextui.org/docs/guide/getting-started)


![Example](https://jc6qaozbaz24hohddrzkrpggseylt5v7bxixeyxfjsbjhv43lkua.arweave.net/SL0AOyEGdcO44xxyqLzGkTC59r8N0XJi5UyCk9ebWqg)


### Profile

```tsx
import { Profile } from '@gumhq/gum-ui-components';

function Main() {
  return (
    <Profile profileURI="https://gum.fun/example/profile.json" />
  );
}

```

### Post

```tsx
import { Post } from '@gumhq/gum-ui-components';

function Main() {
  return (
    <Post
      profileURI="https://gum.fun/example/profile.json"
      postURI="https://gum.fun/example/post.json"
    />
  );
}

```

### Metadata Types

You can import the expected types for the metadata of a post or profile.

```tsx
import { PostMetadata, ProfileMetadata } from '@gumhq/gum-ui-components';
```