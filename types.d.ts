export type User = {
  user: string;
  name: string;
  photo: string;
  verified?: boolean;
};

export type Tweet = {
  user: User;
  tweet: string;
  photos: string[];
};
