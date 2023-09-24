export type User = {
  user: string;
  name: string;
  photo: string;
};

export type Tweet = {
  user: User;
  tweet: string;
  photos: string[];
};
