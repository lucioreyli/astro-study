export type User = {
  user: string;
  name: string;
  photo: string;
  verified?: boolean;
};

export type Tweet = {
  id: `${number}`;
  user: User;
  tweet: string;
  photos: string[];
  likes: number;
  replies: string[];
  retweets: number;
};
