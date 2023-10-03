import type { Tweet } from "@/types";

export const tweets: Tweet[] = [
  {
    id: "1706400080184365384",
    user: {
      name: "Dan StarWarsCentralized",
      user: "SCentralized",
      verified: false,
      photo:
        "https://pbs.twimg.com/profile_images/1699518528313823232/lQhmro8t_400x400.jpg",
    },
    tweet: "The Mandalorian Season 2 if it was a book released in 1997",
    photos: ["F65Z0iEXcAAH-Nc"],
    likes: 1047,
    replies: new Array(9).fill(null),
    retweets: 125,
  },
  {
    id: "1705988408198263092",
    user: {
      name: "Biki Nice",
      user: "Biki_Nice",
      verified: false,
      photo:
        "https://pbs.twimg.com/profile_images/1425764885548478464/epXzwP6f_400x400.jpg",
    },
    tweet: `Grogu on the verge of crying when Din took the decision to adopt him 😭\n\nDin Grogu 🥲`,
    photos: ["F6zjab-WAAATaJe"],
    likes: 0,
    replies: [],
    retweets: 0,
  },
  {
    id: "1709053552302477784",
    user: {
      name: "Apple Hub",
      user: "theapplehub",
      verified: true,
      photo:
        "https://pbs.twimg.com/profile_images/1425764885548478464/epXzwP6f_400x400.jpg",
    },
    tweet: `Grogu on the verge of crying when Din took the decision to adopt him 😭\n\nDin Grogu 🥲`,
    photos: ["F7fHJbwbEAAzzG1"],
    likes: 881,
    replies: new Array(581).fill(null),
    retweets: 529,
  },
];
